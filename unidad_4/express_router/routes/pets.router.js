const express = require('express');
const router = express.Router();

let pets = [];

// GET /api/pets - Obtener todas las mascotas
router.get('/', (req, res) => {
    res.json(pets);
});

// POST /api/pets - Agregar una mascota
router.post('/', (req, res) => {
    const { name, type } = req.body;

    if (!name || !type) {
        return res.status(400).json({ error: 'Faltan campos: name y type' });
    }

    const newPet = { id: pets.length + 1, name, type };
    pets.push(newPet);

    // Si viene desde un formulario, redirige a la raíz
    if (req.headers['content-type'].includes('application/x-www-form-urlencoded')) {
        return res.redirect('/');
    }

    res.status(201).json(newPet);
});

module.exports = router;