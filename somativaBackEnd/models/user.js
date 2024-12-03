const mongoose = require('mongoose');

// Cria o esquema do usuário com os campos
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

// Exportando o modelo de usuário criado
module.exports = mongoose.model('User', userSchema);