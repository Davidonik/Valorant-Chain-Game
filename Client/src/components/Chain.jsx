export default function Chain({ chain, seedPlayer, myId, players, readonly = false }) {
  function nameFor(id) {
    const p = players.find((p) => p.id === id);
    return p ? p.name : id === myId ? "You" : "Opponent";
  }

  return (
    <div className="chain-container">
      {/* Seed */}
      <div className="chain-entry seed">
        <span className="chain-player">{seedPlayer}</span>
        <span className="chain-label">starting player</span>
      </div>

      {chain.map((entry, i) => {
        const byMe = entry.submittedBy === myId;
        const submitterName = readonly ? "" : (byMe ? "You" : nameFor(entry.submittedBy));
        const teamsStr = Array.isArray(entry.teams) ? entry.teams.join(", ") : entry.teams;

        return (
          <div key={i} className={`chain-entry ${byMe ? "mine" : "theirs"}`}>
            <div className="chain-arrow">↓</div>
            <span className="chain-player">{entry.canonicalName}</span>
            <span className="chain-meta">
              {teamsStr}
              {!readonly && ` · ${submitterName}`}
            </span>
          </div>
        );
      })}
    </div>
  );
}
