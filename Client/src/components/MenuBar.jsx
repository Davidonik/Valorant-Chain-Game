import { useEffect, useRef, useState } from "react";
import { PATCH_NOTES } from "../patchNotes";
import FeedbackForm from "./FeedbackForm";
import logo from "../assets/valchainlogo.png";
import helpIcon from "../assets/help.png";
import sunIcon from "../assets/sun.png";
import moonIcon from "../assets/moon.png";

// Link to the spreadsheet of all players - leave empty until it's published
const PLAYER_SHEET_URL = "https://docs.google.com/spreadsheets/d/16RrUFvPNNuXOzFcm785uYSdBrCZQLTGGxuEO9Pxkumg/edit?usp=sharing";

const CONTACT_LINKS = [
  { label: "LinkedIn", text: "Long (David) Pham", href: "https://www.linkedin.com/in/long-pham-david" },
  { label: "GitHub", text: "Davidonik", href: "https://github.com/Davidonik" },
  { label: "Email", text: "davidphamlong0@gmail.com", href: "mailto:davidphamlong0@gmail.com" },
];

// Red dot on "Patch Notes" until this browser has opened the newest version
const SEEN_PATCH_KEY = "valochain-seen-patch";
const LATEST_PATCH = PATCH_NOTES[0]?.version ?? "";

function readSeenPatch() {
  try {
    return localStorage.getItem(SEEN_PATCH_KEY) ?? "";
  } catch {
    return LATEST_PATCH; // storage blocked - no way to clear the dot, so don't show it
  }
}

const MENU_ITEMS = [
  ["howto", "How to Play"],
  ["patch", "Patch Notes"],
];

// Grouped under the ? icon
const HELP_ITEMS = [
  ["about", "About"],
  ["feedback", "Feedback"],
  ["contact", "Contact"],
];

export default function MenuBar({ onHome, onDaily }) {
  const [open, setOpen] = useState(null); // "about" | "howto" | "patch" | "feedback" | "contact"
  const [menuOpen, setMenuOpen] = useState(false); // phone dropdown
  const [helpOpen, setHelpOpen] = useState(false);  // ? dropdown
  // index.html sets the starting theme before React loads
  const [dark, setDark] = useState(() => document.documentElement.dataset.theme === "dark");
  const [seenPatch, setSeenPatch] = useState(readSeenPatch);
  const hasNewPatch = seenPatch !== LATEST_PATCH;
  const helpRef = useRef(null);

  useEffect(() => {
    if (!open && !menuOpen && !helpOpen) return;
    function onKey(e) {
      if (e.key === "Escape") {
        setOpen(null);
        setMenuOpen(false);
        setHelpOpen(false);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, menuOpen, helpOpen]);

  // Clicking anywhere outside the ? dropdown closes it
  useEffect(() => {
    if (!helpOpen) return;
    function onClick(e) {
      if (!helpRef.current?.contains(e.target)) setHelpOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [helpOpen]);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    document.documentElement.dataset.theme = next ? "dark" : "light";
    try {
      localStorage.setItem("valochain-theme", next ? "dark" : "light");
    } catch {
      // storage blocked - the choice lasts until the page is reloaded
    }
  }

  function openSection(key) {
    setOpen(key);
    setMenuOpen(false);
    setHelpOpen(false);
    if (key === "patch" && hasNewPatch) {
      setSeenPatch(LATEST_PATCH);
      try {
        localStorage.setItem(SEEN_PATCH_KEY, LATEST_PATCH);
      } catch {
        // storage blocked - the dot just comes back next visit
      }
    }
  }

  return (
    <>
      <nav className="menu-bar">
        <button
          className="menu-brand"
          onClick={() => { setMenuOpen(false); onHome(); }}
          aria-label="ValoChain - back to the home page"
        >
          <img className="menu-logo" src={logo} alt="" />
          ValoChain
        </button>

        {/* Shown instead of the links on narrow screens (see App.css) */}
        <button
          className="menu-toggle"
          aria-label="Menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? "✕" : "☰"}
          {hasNewPatch && !menuOpen && <span className="new-dot" aria-label="New patch notes" />}
        </button>

        <div className={`menu-links ${menuOpen ? "open" : ""}`}>
          {/* A page of its own, unlike the pop-up sections after it */}
          <button className="menu-link menu-link-page" onClick={() => { setMenuOpen(false); onDaily(); }}>
            Daily
          </button>
          {MENU_ITEMS.map(([key, label]) => (
            <button key={key} className="menu-link" onClick={() => openSection(key)}>
              {label}
              {key === "patch" && hasNewPatch && <span className="new-dot" aria-label="New" />}
            </button>
          ))}

          {/* Icon only on desktop; the label shows inside the phone menu */}
          <button
            className="menu-theme-toggle"
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            title={dark ? "Light mode" : "Dark mode"}
            onClick={toggleTheme}
          >
            <img className="menu-theme-icon" src={dark ? sunIcon : moonIcon} alt="" />
            <span className="menu-theme-label">{dark ? "Light mode" : "Dark mode"}</span>
          </button>

          {/* On phones the ? is hidden and these show as plain links (see App.css) */}
          <div className="menu-help" ref={helpRef}>
            <button
              className="menu-help-toggle"
              aria-label="Help and info"
              aria-expanded={helpOpen}
              onClick={() => setHelpOpen((o) => !o)}
            >
              <img src={helpIcon} alt="" />
            </button>
            <div className={`menu-help-items ${helpOpen ? "open" : ""}`}>
              {HELP_ITEMS.map(([key, label]) => (
                <button key={key} className="menu-link" onClick={() => openSection(key)}>
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {open && (
        <div className="modal-backdrop" onClick={() => setOpen(null)}>
          <div className="card modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" aria-label="Close" onClick={() => setOpen(null)}>✕</button>
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
                    The pro player has to meet these requirements to appear in the game (all the information is based on Liquipedia and VLR):
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
                <h3 className="patch-version">1v1 mode</h3>
                <ul className="modal-list">
                  <li>The game opens with a random pro player</li>
                  <li>Player 1 names someone who is/was their teammate</li>
                  <li>That player becomes the next link, and player 2 goes</li>
                  <li>Each player can only be used once per game</li>
                  <li>Run out of time, no hearts left (each incorrect guess = -1 heart; 3 hearts total), or get left with no teammates, and you lose</li>
                </ul>
                <h3 className="patch-version">Solo Practice</h3>
                <ul className="modal-list">
                  <li>Same rules as 1v1, but you name every link yourself.</li>
                  <li>Your score is the length of your chain - your best is saved on this device.</li>
                </ul>
                <h3 className="patch-version">Daily Challenge</h3>
                <ul className="modal-list">
                  <li>Every day at midnight a new pro player is featured - the same one for everyone (something like Wordle)</li>
                  <li>The grid shows the first letter of each of their teammates and name as many as you can, in any order</li>
                  <li>3 hearts, each wrong guess costs one, no time limit</li>
                  <li>Your score is the teammates you named</li>
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
                        {p.date && <span className="chain-meta"> - {p.date}</span>}
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

          </div>
        </div>
      )}
    </>
  );
}
