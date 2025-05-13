import mongoose from "mongoose";

const usersCollection = 'usuarios';

const userSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    email: {
        type: String,
        unique: true,
    }
});

export const userModel = mongoose.model(usersCollection, userSchema);