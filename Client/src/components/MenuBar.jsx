import { useEffect, useState } from "react";
import { PATCH_NOTES } from "../patchNotes";
import FeedbackForm from "./FeedbackForm";

// Link to the spreadsheet of all players — leave empty until it's published
const PLAYER_SHEET_URL = "https://docs.google.com/spreadsheets/d/16RrUFvPNNuXOzFcm785uYSdBrCZQLTGGxuEO9Pxkumg/edit?usp=sharing";

const CONTACT_LINKS = [
  { label: "LinkedIn", text: "Long (David) Pham", href: "https://www.linkedin.com/in/long-pham-david" },
  { label: "GitHub", text: "Davidonik", href: "https://github.com/Davidonik" },
  { label: "Email", text: "davidphamlong0@gmail.com", href: "mailto:davidphamlong0@gmail.com" },
];

const MENU_ITEMS = [
  ["about", "About"],
  ["howto", "How to Play"],
  ["patch", "Patch Notes"],
  ["feedback", "Feedback"],
  ["contact", "Contact"],
];

export default function MenuBar() {
  const [open, setOpen] = useState(null); // "about" | "howto" | "patch" | "feedback" | "contact"
  const [menuOpen, setMenuOpen] = useState(false); // phone dropdown

  useEffect(() => {
    if (!open && !menuOpen) return;
    function onKey(e) {
      if (e.key === "Escape") {
        setOpen(null);
        setMenuOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, menuOpen]);

  function openSection(key) {
    setOpen(key);
    setMenuOpen(false);
  }

  return (
    <>
      <nav className="menu-bar">
        <span className="menu-brand">ValoChain</span>

        {/* Shown instead of the links on narrow screens (see App.css) */}
        <button
          className="menu-toggle"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div className={`menu-links ${menuOpen ? "open" : ""}`}>
          {MENU_ITEMS.map(([key, label]) => (
            <button key={key} className="menu-link" onClick={() => openSection(key)}>
              {label}
            </button>
          ))}
        </div>
      </nav>

      {open && (
        <div className="modal-backdrop" onClick={() => setOpen(null)}>
          <div className="card modal" onClick={(e) => e.stopPropagation()}>
            {open === "about" && (
              <>
                <h2 className="modal-title">About</h2>
                <section className="patch-entry">
                  <h3 className="patch-version">What is ValoChain?</h3>
                  <p className="modal-text">
                    ValoChain is a 1v1 trivia game about Valorant esports. Two players take
                    turns linking pro players through the teams they played on together,
                    building a chain until someone runs out of time or answers.
                  </p>
                </section>
                <section className="patch-entry">
                  <h3 className="patch-version">Player database</h3>
                  <p className="modal-text">
                    Every answer is checked against a database of 600+ pro players from
                    the Americas, EMEA, Pacific and China, each listed with their teammates
                    and the teams they shared.
                  </p>
                  <p className="modal-text">
                    The pro player has to meet these requirements to appear in the game:
                  </p>
                  <ul className="modal-list">
                    <li>The player attended a Masters, Champions or an International League (EMEA, Americas, Pacific, China)</li>
                    <li>Played at least one game for that team</li>
                  </ul>
                  {PLAYER_SHEET_URL ? (
                    <a className="modal-link" href={PLAYER_SHEET_URL} target="_blank" rel="noreferrer">
                      View the full player list
                    </a>
                  ) : (
                    <p className="chain-meta">Full player list coming soon.</p>
                  )}
                </section>
              </>
            )}

            {open === "howto" && (
              <>
                <h2 className="modal-title">How to Play</h2>
                <ul className="modal-list">
                  <li>The game opens with a random pro player.</li>
                  <li>Player 1 names someone who is/was their teammate.</li>
                  <li>That player becomes the next link, and player 2 goes.</li>
                  <li>Each player can only be used once per game.</li>
                  <li>Run out of time, no heart left (each incorrect guess = -1 heart; 3 hearts total), or get left with no teammates to name, and you lose.</li>
                </ul>
              </>
            )}

            {open === "patch" && (
              <>
                <h2 className="modal-title">Patch Notes</h2>
                <div className="patch-list">
                  {PATCH_NOTES.map((p) => (
                    <section key={p.version} className="patch-entry">
                      <h3 className="patch-version">
                        v{p.version}
                        {p.date && <span className="chain-meta"> — {p.date}</span>}
                      </h3>
                      <ul className="modal-list">
                        {p.changes.map((c) => (
                          <li key={c}>{c}</li>
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              </>
            )}

            {open === "feedback" && (
              <>
                <h2 className="modal-title">Feedback</h2>
                <FeedbackForm />
              </>
            )}

            {open === "contact" && (
              <>
                <h2 className="modal-title">Contact</h2>
                <p className="subtitle">Built by Long Pham</p>
                <ul className="contact-list">
                  {CONTACT_LINKS.map((c) => (
                    <li key={c.label} className="contact-item">
                      <span className="chain-label">{c.label}</span>
                      <a href={c.href} target="_blank" rel="noreferrer">{c.text}</a>
                    </li>
                  ))}
                </ul>
              </>
            )}

            <button className="btn btn-ghost" onClick={() => setOpen(null)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}
