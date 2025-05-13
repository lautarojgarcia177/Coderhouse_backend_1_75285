import express from 'express';
import __dirname from './utils.js';
import handlebars from 'express-handlebars';
import viewsRouter from './routes/views.router.js';
import { Server } from 'socket.io'; //Recuerda que este {Server} es propio de websockets.

const app = express();
const httpServer = app.listen(8080, () => console.log("Escuchando en puerto 8080"));

const io = new Server(httpServer); //io será un servidor para trabajar con sockets, ¿por qué ahora lo llamamos "io"?
//Configuramos todo lo referente a plantillas.
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + '/views');
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/public')); //Recuerda que es importante para tener archivos js y css en plantillas
app.use('/', viewsRouter);

let messages = []; // Los mensajes se almacenarán aquí

io.on('connection', socket => {
    console.log("Nuevo cliente conectado");

    socket.on('message', data => { // Nota cómo escucha al evento con el mismo nombre que el emit del cliente: "message"
        messages.push(data);       // Guardamos el objeto en la "base"
        io.emit('messageLogs', messages); // Reenviamos instantáneamente los logs actualizados.
        // (Nota que el evento "messageLogs" no está programado del lado del cliente, lo agregaremos más adelante)
    });
});

