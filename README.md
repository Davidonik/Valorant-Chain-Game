# ValoChain 🎮
 
A real-time 2-player web game where you chain Valorant pro players by their teammates. Name a player who was teammates with the current player — run out of options or time and you lose.
 
**[▶ Play Now](https://your-vercel-url.vercel.app)** <!-- replace with your actual URL -->
 
---
 
## How to Play
 
1. One player creates a room and shares the 4-letter code
2. The other player joins with the code
3. A random pro player is picked as the starting point
4. Players take turns naming a pro who was teammates with the current player
5. You have **15 seconds** per turn
6. Lose if you: run out of time, can't name a valid teammate, or name someone already used
## Rules
 
- Any player who appeared on the same **org roster** counts as a teammate (not just tournament rosters)
- Player names are **case-insensitive**
- Once a player is used, they can't be used again in that game
- Coverage: VCT 2021–present, major regions (NA, EMEA, APAC, BR, LATAM)
---
 
## Tech Stack
 
| Layer | Tech |
|-------|------|
| Frontend | React + Vite |
| Backend | Node.js + Express + Socket.io |
| Frontend hosting | Vercel |
| Backend hosting | Railway |
 
---
 
## Local Development
 
### Prerequisites
- Node.js 18+
### Setup
 
```bash
# Clone the repo
git clone https://github.com/Davidonik/Valorant-Chain-Game.git
cd Valorant-Chain-Game
 
# Install server deps
cd server && npm install
 
# Install client deps
cd ../client && npm install
```
 
### Run locally
 
```bash
# Terminal 1 — start the server
cd server && npm run dev
 
# Terminal 2 — start the client
cd client && npm run dev
```
 
Open `http://localhost:5173` in two browser tabs to test both players.
 
### Environment Variables
 
Create `client/.env`:
```
VITE_SERVER_URL=http://localhost:3001
```
 
---
 
## Deploy
 
### Backend (Railway)
1. Connect your GitHub repo to [Railway](https://railway.app)
2. Set the root directory to `server/`
3. Railway auto-detects Node — no extra config needed
4. Copy the Railway URL (e.g. `https://valochain-production.up.railway.app`)
### Frontend (Vercel)
1. Import the repo on [Vercel](https://vercel.com)
2. Set root directory to `client/`
3. Add env variable: `VITE_SERVER_URL=https://your-railway-url.railway.app`
4. Deploy
### After deploying
Update CORS in `server/index.js`:
```js
origin: "https://your-vercel-url.vercel.app"
```
 
---
 
## Project Structure
 
```
├── server/
│   ├── index.js          # Express + Socket.io setup
│   ├── roomManager.js    # Room creation, game flow, socket events
│   ├── gameLogic.js      # Validation, player lookup, game rules
│   └── players.js        # Pro player teammate database
└── client/
    ├── src/
    │   ├── pages/
    │   │   ├── Home.jsx      # Create / join room
    │   │   ├── Lobby.jsx     # Waiting for opponent
    │   │   ├── Game.jsx      # Main game screen
    │   │   └── GameOver.jsx  # Results + rematch
    │   └── components/
    │       ├── Timer.jsx     # 15s countdown bar
    │       └── Chain.jsx     # Player chain display
    └── socket.js             # Socket.io client singleton
```
 
---
 
## Adding Players to the Database
 
Edit `server/players.js`. Each player needs a symmetric entry — both sides of every teammate relationship must be listed:
 
```js
PlayerName: {
  teammates: {
    Teammate1: ["Team Name"],
    Teammate2: ["Team A", "Team B"],  // played together on multiple teams
  }
},
Teammate1: {
  teammates: {
    PlayerName: ["Team Name"],
    // ...
  }
},
```
 
---