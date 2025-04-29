const express = require('express');
const router = express.Router();
const { uploader } = require('../utils')

let pets = [];

// GET /api/pets - Obtener todas las mascotas
router.get('/', (req, res) => {
    res.json(pets);
});

const logMiddleware = (req, res, next) => {
    console.log('HOla soy un middleware!!');
    req.pasoPorLog = true;
    next();
}

// POST /api/pets - Agregar una mascota
router.post('/', uploader.single('thumbnail'), logMiddleware, (req, res) => {
    const { name, type } = req.body;
    const thumbnail = req.file;

    if (!name || !type || !thumbnail) {
        return res.status(400).json({ error: 'Faltan campos: name, type o image' });
    }

    const newPet = { id: pets.length + 1, name, type, thumbnail: thumbnail.filename };
    pets.push(newPet);

    // Si viene desde un formulario, redirige a la raíz
    if (req.headers['content-type'].includes('application/x-www-form-urlencoded')) {
        return res.redirect('/');
    }

    res.status(201).json(newPet);
});

// /api/pets/listado
router.get('/listado', (req, res) => {
    console.log(pets);
    res.status(400).render('mascotas', { pets, isAdmin: false })
})
router.get('/listadoAdmin', (req, res) => {
    console.log(pets);
    res.render('mascotas', { pets, isAdmin: true })
})

module.exports = router;