const express = require('express');
const path = require('path');
const { Server } = require('socket.io');
const http = require('http');

const port = 3000;
const app = express()
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

server.listen(port, ()=>{
    console.log(`Puerto del servidor: ${port}`)
})

io.on('connection', (socket) => {
  console.log('Coneccion abierta');
  
  
  socket.on('chat message', (msg) => {
    io.emit('chat message', msg); 
  });

  socket.on('disconnect', () => {
    console.log('Coneccion cerrada');
  });
});