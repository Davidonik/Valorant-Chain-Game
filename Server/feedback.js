const fs = require("fs");
const path = require("path");

// ---------------------------------------------------------------------------
// FEEDBACK
// Every submission is logged and appended to feedback.jsonl (one JSON object
// per line). If FEEDBACK_WEBHOOK_URL is set to a Discord webhook, it is also
// posted there — use that in production, where the local file does not
// survive a redeploy.
// ---------------------------------------------------------------------------

const FEEDBACK_FILE = path.join(__dirname, "feedback.jsonl");
const WEBHOOK_URL = process.env.FEEDBACK_WEBHOOK_URL;

const TYPES = ["Bug", "Add a player", "Feature", "Other"];
const MAX_MESSAGE = 1000;
const MAX_CONTACT = 100;
const COOLDOWN_MS = 30_000;

function handleFeedbackEvents(socket) {
  let lastSubmitted = 0;

  socket.on("submit_feedback", (data, callback) => {
    if (typeof callback !== "function") return;

    const type = TYPES.includes(data?.type) ? data.type : "Other";
    const message = typeof data?.message === "string" ? data.message.trim() : "";
    const contact = typeof data?.contact === "string" ? data.contact.trim() : "";

    if (!message) {
      return callback({ success: false, error: "Write a message first." });
    }
    if (message.length > MAX_MESSAGE || contact.length > MAX_CONTACT) {
      return callback({ success: false, error: "That message is too long." });
    }
    if (Date.now() - lastSubmitted < COOLDOWN_MS) {
      return callback({ success: false, error: "Please wait a bit before sending more." });
    }
    lastSubmitted = Date.now();

    const entry = { time: new Date().toISOString(), type, message, contact };

    console.log(`Feedback [${type}] ${message}${contact ? ` (contact: ${contact})` : ""}`);

    fs.appendFile(FEEDBACK_FILE, JSON.stringify(entry) + "\n", (err) => {
      if (err) console.error("Could not save feedback:", err.message);
    });

    if (WEBHOOK_URL) {
      fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: `**${type}**\n${message}${contact ? `\n— ${contact}` : ""}`,
          allowed_mentions: { parse: [] },
        }),
      }).catch((err) => console.error("Could not forward feedback:", err.message));
    }

    callback({ success: true });
  });
}

module.exports = { handleFeedbackEvents };
