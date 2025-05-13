import express from 'express';
import mongoose from 'mongoose';
import usersRouter from './routers/users.router.js';

const app = express();
app.use(express.json());
const PORT = 3000;
app.listen(PORT, () => console.log(`Servidor escuchando en el puerto ${PORT}`));

mongoose.connect('mongodb+srv://lautaro:tPD4TAJpiCvuQzxt@cluster0.na94p.mongodb.net/usuarios?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log('Conectado a la BD');
    }).catch((error) => {
        console.error("Hubo un error al conectarse a la bd", error)
    });

app.use('/api/users', usersRouter);