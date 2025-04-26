const express = require('express');
const router = express.Router();

let users = [];

router.get('/getAll', (req, res) => {
    res.json(users);
});

module.exports = router;