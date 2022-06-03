const express = require("express");
const http = require("http");
const { v4: uuidv4 } = require("uuid");
const cors = require("cors");
const twilio = require("twilio");

const PORT = process.env.PORT || 5002;
const app = express();
const server = http.createServer(app);

app.use(cors());

let connectedUsers = [];
let rooms = [];

// create route to check if room exists
app.get("/api/room-exists/:roomId", (req, res) => {
  const { roomId } = req.params;
  const room = rooms.find((room) => room.id === roomId);

  if (room) {
    // send reponse that room exists
    if (room.connectedUsers.length > 3) {
      return res.send({ roomExists: true, full: true });
    } else {
      return res.send({ roomExists: true, full: false });
    }
  } else {
    // send response that room does not exists
    return res.send({ roomExists: false });
  }
});

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on('connection', (socket) => {
  console.log('User connected', socket.id)

  socket.on('create-new-room', (data) => {
    createNewRoomHandler(data, socket)
  })

  socket.on('join-room', (data) => {
    console.log(`Host is Joining Room`)
    console.log(data)
  })
})

const createNewRoomHandler = (data, socket) => {
  console.log(`Host is creating new Room`)
  console.log(data)
  const { identity } = data
  const roomId = uuidv4()
  // create new user
  const newUser = {
    identity,
    id: uuidv4(),
    socketId: socket.id,
    roomId
  }
  // push that user to connected Users
  connectedUsers = [...connectedUsers, newUser];

  // Create New Room
  const newRoom = {
    id: roomId,
    connectedUsers: [newUser]
  }
  // join socket.io room
  socket.join(roomId)
  rooms = [...rooms, newRoom]

  // emit to that client which connected that room roomId

  // emit an event to all users to connected to that room
  //  about new Users which are right now in this room
}

server.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});
