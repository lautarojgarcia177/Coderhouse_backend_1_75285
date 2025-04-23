const express = require('express')
const app = express()
const port = 8080

const usuarios = [
    {
        id: 1,
        nombre: "Juan Pérez",
        email: "juan.perez@example.com",
        edad: 30,
        activo: true,
        genero: 'M'
    },
    {
        id: 2,
        nombre: "María López",
        email: "maria.lopez@example.com",
        edad: 25,
        activo: false,
        genero: 'F'
    },
    {
        id: 3,
        nombre: "Carlos Ruiz",
        email: "carlos.ruiz@example.com",
        edad: 35,
        activo: true,
        genero: 'M'
    }
];

// El endpoint del método GET a la ruta  ‘/bienvenida’ deberá devolver un html con letras en color azul, en una string, dando la bienvenida.
app.get('/bienvenida', (request, response) => {
    const html = `
    <html>
        <head>
            <title>Bienvenida</title>
        </head>
        <body>
            <h1 style="color: blue;">Bienvenido a nuestro servidor Express.js</h1>
        </body>
    </html>
    `;
    response.send(html);
})

//El endpoint del método GET a la ruta ‘/usuario’ deberá devolver un objeto con los datos de un usuario falso: {nombre, apellido,edad, correo}
app.get('/usuario', (request, response) => {
    const usuarioFalso = {
        nombre: 'John',
        apellido: "Doe",
        edad: 30,
        correo: 'johndoe@fakemail.com',
    };
    response.json(usuarioFalso);
})

app.get('/usuarios', (request, response) => {
    const genero = request.query.genero;
    if (!genero || (genero !== 'M' && genero !== 'F')) return response.send({ usuarios });
    const usuariosFiltrados = usuarios.filter(usuario => usuario.genero === genero);
    response.json(usuariosFiltrados);
})

app.get('/:id/', (request, response) => {
    const idUsuario = Number(request.params.id);
    const usuario = usuarios.find(usuario => usuario.id === idUsuario);
    if (!usuario) return response.send({ error: "Usuario no encontrado" });
    response.json(usuario);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})