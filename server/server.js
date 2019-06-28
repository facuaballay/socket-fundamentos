const express = require('express');
const socketIO = require('socket.io');
//exporto esto porque socket io trabaja con http de nodejs
const http = require('http');


const path = require('path');

const app = express();
//levanta el server con express adentro por eso el app
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');

const port = process.env.PORT || 3000;

app.use(express.static(publicPath));
//inicio el socket io.
//io =es la comunicacion con el backend.
//exporto el io para usarlo en el socket.js
module.exports.io = socketIO(server);
//importo el archivo socket.js
require('./sockets/socket');



//escucha en el puerto
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});

//http://localhost:3000/socket.io/socket.io.js si podes ver esto esta funcando