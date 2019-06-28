 
    var socket = io();
    //conecta al servidor va a estar pendiente a cualquier cambio del servidor
    //escucha informacion on()
        socket.on('connect', function(){
            console.log("conectado al servidor");
    
    
        });
        socket.on('disconnect',function(){
    
            console.log('perdimos conexion con el server');
    
        });
    //enviar informacion al servidor emit()
    socket.emit('enviarmensaje',
        {
        usuario:'facundo',
        mensaje:'hola mundo'
        },
        function (resp){
        console.log('respuesta server : ' , resp);        
    });
    //escucho informacion.
    socket.on('enviarmensaje', function (respuesta) {
    
        console.log('Servidor',respuesta)
    
    })