import { useEffect, useState } from "react";
import socket from "./socket";
import Home from "./pages/Home";
import Lobby from "./pages/Lobby";
import Game from "./pages/Game";
import GameOver from "./pages/GameOver";
import Daily from "./pages/Daily";
import MenuBar from "./components/MenuBar";
import "./App.css";

// pages: "home" | "lobby" | "game" | "gameover" | "daily"

const SLOW_CONNECT_MS = 2500; // show the "waking up" notice after this long

export default function App() {
  const [page, setPage] = useState("home");
  const [playerName, setPlayerName] = useState("");
  const [room, setRoom] = useState(null);             // lobby info: code, region, host, players
  const [gameState, setGameState] = useState(null);   // from game_start
  const [result, setResult] = useState(null);         // from game_over
  const [notice, setNotice] = useState("");
  const [homeKey, setHomeKey] = useState(0);
  const [slowConnect, setSlowConnect] = useState(false); // server still waking up           // message shown on the home page

  // The free server host puts the server to sleep when idle, and waking it
  // takes a while - say so instead of looking frozen
  useEffect(() => {
    let timer = null;
    function onDisconnected() {
      clearTimeout(timer);
      timer = setTimeout(() => setSlowConnect(true), SLOW_CONNECT_MS);
    }
    function onConnected() {
      clearTimeout(timer);
      setSlowConnect(false);
    }
    if (!socket.connected) onDisconnected();
    socket.on("connect", onConnected);
    socket.on("disconnect", onDisconnected);
    return () => {
      clearTimeout(timer);
      socket.off("connect", onConnected);
      socket.off("disconnect", onDisconnected);
    };
  }, []);

  // Listen here (not in Lobby/GameOver) so the event can't arrive before a
  // page has mounted — the joiner gets game_start right after the join ack.
  useEffect(() => {
    function onGameStart(data) {
      setGameState(data);
      setPage("game");
    }
    function onRoomUpdate(data) {
      setRoom(data);
    }
    socket.on("game_start", onGameStart);
    socket.on("room_update", onRoomUpdate);
    return () => {
      socket.off("game_start", onGameStart);
      socket.off("room_update", onRoomUpdate);
    };
  }, []);

  function goToLobby({ name, room }) {
    setPlayerName(name);
    setRoom(room);
    setPage("lobby");
  }

  function goToGameOver(data) {
    setResult(data);
    setPage("gameover");
  }

  function onHostLeft() {
    goHome();
    setNotice("The host left the room.");
  }

  function goHome() {
    socket.emit("leave_room");
    setNotice("");
    setPage("home");
    setGameState(null);
    setResult(null);
  }

  // Menu bar links leave any room: a live 1v1 ends for the opponent, so ask first
  function confirmLeave() {
    return page !== "game" || gameState?.solo || window.confirm("Leave the game? Your opponent will win.");
  }

  function onLogoClick() {
    if (!confirmLeave()) return;
    goHome();
    setHomeKey((k) => k + 1); // also resets Home back to its first screen
  }

  function onDailyClick() {
    if (!confirmLeave()) return;
    goHome();
    setPage("daily");
  }

  return (
    <div className="app">
      <MenuBar onHome={onLogoClick} onDaily={onDailyClick} />
      {slowConnect && (
        <p className="connection-notice">
          Waking up the server - this can take up to a minute after it's been idle…
        </p>
      )}
      {page === "home" && (
        <Home key={homeKey} onJoined={goToLobby} notice={notice} />
      )}
      {page === "daily" && <Daily />}
      {page === "lobby" && (
        <Lobby
          room={room}
          onBack={goHome}
          onHostLeft={onHostLeft}
        />
      )}
      {page === "game" && (
        <Game
          playerName={playerName}
          initialGameState={gameState}
          onGameOver={goToGameOver}
        />
      )}
      {page === "gameover" && (
        <GameOver
          result={result}
          onHome={goHome}
        />
      )}
      <footer className="disclaimer">
        ValoChain isn't endorsed by Riot Games and doesn't reflect the views or opinions
        of Riot Games or anyone officially involved in producing or managing Riot Games
        properties. Riot Games, and all associated properties are trademarks or registered
        trademarks of Riot Games, Inc.
      </footer>
    </div>
  );
}
