require('dotenv').config();
const cors    = require('cors');
const express = require('express');
const app = express();

const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const { checkCustomer } = require('./socket-io/socket');

const io = new Server(server, {
  cors: {
    // origin: "http://localhost:4200",
    origin: "https://mapbox-socket.netlify.app",
    methods: ["GET", "POST"]
  }
});
checkCustomer( io );

// CONFIGURAR CORS
app.use( cors());

//LECTURA Y PARSEO DEL BODY
app.use(express.json());

app.use((req, res, next) => {
  req.io = io;
  return next();
});

app.use('/', require('./routes/routes'));

server.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}`);
});
