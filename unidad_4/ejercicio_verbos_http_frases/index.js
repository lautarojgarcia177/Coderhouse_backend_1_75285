const express = require('express');
const app = express();

app.use(express.json());

// Frase inicial
let frase = "Frase inicial";

app.get('/api/frase', (req, res) => {
    res.json({ frase })
});

app.get('/api/palabras/:pos', (req, res) => {
    const pos = Number(req.params.pos);
    const palabras = frase.split(' ');
    if (isNaN(pos) || pos < 0 || pos > palabras.length) {
        return res.status(400).json({ error: 'Posición inválida' });
    }
    res.json(palabras[pos]);
});

app.post('/api/palabras', (req, res) => {
    const palabra = req.body.palabra;
    frase = `${frase} ${palabra}`;
    res.json({ frase })
})

app.put('/api/palabras/:pos', (req, res) => {
    const pos = Number(req.params.pos);
    const palabra = req.body.palabra;
    const palabras = frase.split(' ');

    if (isNaN(pos) || pos < 0 || pos > palabras.length) {
        return res.status(400).json({ error: 'Posición inválida' });
    }

    palabras[pos] = palabra;
    frase = palabras.join(' ');

    res.json({ frase });
});

app.delete('/api/palabras/:pos', (req, res) => {
    const pos = Number(req.params.pos);
    const palabras = frase.split(' ');

    if (isNaN(pos) || pos < 0 || pos > palabras.length) {
        return res.status(400).json({ error: 'Posición inválida' });
    }

    const eliminada = palabras.splice(pos, 1)[0];
    frase = palabras.join(' ');

    res.json({ frase });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
