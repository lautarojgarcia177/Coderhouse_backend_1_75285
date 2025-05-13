import { Router } from 'express';
import { userModel } from '../models/user.model.js';

const router = Router();

router.get('/', async (req, res) => {
    try {
        let users = await userModel.find();
        res.send(({ result: "success", payload: users }));
    } catch (error) {
        console.error(error);
    }
});

router.get('/:uid', async (req, res) => {
    const { uid } = req.params;
    try {
        let user = await userModel.find({ _id: uid });
        res.send(({ result: "success", payload: user }));
    } catch (error) {
        console.error(error);
    }
});

router.delete('/:uid', async (req, res) => {
    let uid = req.params.uid;
    let result = await userModel.deleteOne({
        _id: uid,
    });
    res.send({ status: "success", payload: result });
})

router.put('/:uid', async (req, res) => {
    let { uid } = req.params;
    let userToReplace = req.body;
    if (!userToReplace.nombre || !userToReplace.apellido || !userToReplace.email) {
        return res.send({ status: "error", message: "Falta nombre, apellido u email" });
    }
    let result = await userModel.updateOne({ _id: uid }, userToReplace);
    res.send({ status: "success", payload: result });
});

router.post('/', async (req, res) => {
    let { nombre, apellido, email } = req.body;
    let result = await userModel.insertOne({
        nombre,
        apellido,
        email
    });
    res.send({ status: "success", payload: result })
})

export default router