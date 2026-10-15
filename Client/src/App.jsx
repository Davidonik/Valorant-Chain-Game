import { useEffect, useState } from "react";
import socket from "./socket";
import Home from "./pages/Home";
import Lobby from "./pages/Lobby";
import Game from "./pages/Game";
import GameOver from "./pages/GameOver";
import MenuBar from "./components/MenuBar";
import "./App.css";

// pages: "home" | "lobby" | "game" | "gameover"

export default function App() {
  const [page, setPage] = useState("home");
  const [playerName, setPlayerName] = useState("");
  const [room, setRoom] = useState(null);             // lobby info: code, region, host, players
  const roomCode = room?.code ?? "";
  const [gameState, setGameState] = useState(null);   // from game_start
  const [result, setResult] = useState(null);         // from game_over
  const [notice, setNotice] = useState("");           // message shown on the home page

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

  return (
    <div className="app">
      <MenuBar />
      {page === "home" && (
        <Home onJoined={goToLobby} notice={notice} />
      )}
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
          roomCode={roomCode}
          initialGameState={gameState}
          onGameOver={goToGameOver}
        />
      )}
      {page === "gameover" && (
        <GameOver
          playerName={playerName}
          roomCode={roomCode}
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
