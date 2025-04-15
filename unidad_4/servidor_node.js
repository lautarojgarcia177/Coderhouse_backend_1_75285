const express = require('express')
const app = express()
const port = 8080


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

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})