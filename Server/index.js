const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const { handleSocketEvents } = require("./roomManager");

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*", // tighten this to your Vercel URL once deployed
    methods: ["GET", "POST"],
  },
});

// Health check endpoint (Railway needs this)
app.get("/", (req, res) => {
  res.send("Valorant Chain Game Server running");
});

// Hand off all socket logic to roomManager
io.on("connection", (socket) => {
  console.log(`Socket connected: ${socket.id}`);
  handleSocketEvents(io, socket);

  socket.on("disconnect", () => {
    console.log(`Socket disconnected: ${socket.id}`);
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
