const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const usersRouter = require('./routes/users.router');
const petsRouter = require('./routes/pets.router');

app.use('/api/users', usersRouter);
app.use('/api/pets', petsRouter);

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
