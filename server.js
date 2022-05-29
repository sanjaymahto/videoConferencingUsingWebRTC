const express = require('express');
const http = require('http');
const uuid =  require('uuid');
const cors = require('cors');
const twilio = require('twilio');

const PORT = process.env.PORT || 5002;

const app = express();

const server = http.createServer(app);

app.use(cors());

const io = require('socket.io')(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST']
    }
})

server.listen(PORT, () => {
    console.log('Server is listening to port: ', PORT)
})
