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
  const [roomCode, setRoomCode] = useState("");
  const [gameState, setGameState] = useState(null);   // from game_start
  const [result, setResult] = useState(null);         // from game_over

  // Listen here (not in Lobby/GameOver) so the event can't arrive before a
  // page has mounted — the joiner gets game_start right after the join ack.
  useEffect(() => {
    function onGameStart(data) {
      setGameState(data);
      setPage("game");
    }
    socket.on("game_start", onGameStart);
    return () => socket.off("game_start", onGameStart);
  }, []);

  function goToLobby({ name, code }) {
    setPlayerName(name);
    setRoomCode(code);
    setPage("lobby");
  }

  function goToGameOver(data) {
    setResult(data);
    setPage("gameover");
  }

  function goHome() {
    setPage("home");
    setGameState(null);
    setResult(null);
  }

  return (
    <div className="app">
      <MenuBar />
      {page === "home" && (
        <Home onJoined={goToLobby} />
      )}
      {page === "lobby" && (
        <Lobby
          playerName={playerName}
          roomCode={roomCode}
          onBack={goHome}
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
