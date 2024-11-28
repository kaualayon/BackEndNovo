// models/User.js
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  role: { type: String, default: "user" },

  active: { type: Boolean, default: true } // Campo para status do usuário
});

const User = mongoose.model('User', userSchema);

module.exports = { User };
