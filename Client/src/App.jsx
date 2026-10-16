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

export default function App() {
  const [page, setPage] = useState("home");
  const [playerName, setPlayerName] = useState("");
  const [room, setRoom] = useState(null);             // lobby info: code, region, host, players
  const [gameState, setGameState] = useState(null);   // from game_start
  const [result, setResult] = useState(null);         // from game_over
  const [notice, setNotice] = useState("");
  const [homeKey, setHomeKey] = useState(0);           // message shown on the home page

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

  // Logo in the menu bar: leaving a live 1v1 ends it for the opponent, so ask first
  function onLogoClick() {
    if (page === "game" && !gameState?.solo && !window.confirm("Leave the game? Your opponent will win.")) {
      return;
    }
    goHome();
    setHomeKey((k) => k + 1); // also resets Home back to its first screen
  }

  return (
    <div className="app">
      <MenuBar onHome={onLogoClick} />
      {page === "home" && (
        <Home key={homeKey} onJoined={goToLobby} onDaily={() => setPage("daily")} notice={notice} />
      )}
      {page === "daily" && <Daily onHome={goHome} />}
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
