const {io} = require('../server')


io.on('connection',(client)=>{
    
    console.log('usuario conectado');
//emito del servidor al cliente.
    
    client.emit('enviarmensaje',{
        usuario:'admin',
        mensaje:'Bienvenido a esta aplicacion'
    });

   client.on('disconnect',()=>{
       console.log("usuario desconectado");
   });
//escuchar el cliente.
//recibo el mensaje.
client.on('enviarmensaje', (data, callback) => {
    
    console.log(data);
//emito un mensaje a todos los usuarios.
    client.broadcast.emit('enviarmensaje',data);
    
    
    // console.log(mensaje);
    // if (mensaje.usuario){
    //     callback({
    //         respuesta:'todo salio bien'
    //     });

    // } else {
    //  callback({
    //         respuesta:'todo salio mal'});  
    //     }

    });



//termina el ion connect
});