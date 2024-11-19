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

  role: { type: String, enum: ['user', 'admin'], default: 'user' } // Define "user" como padrão
});

const User = mongoose.model('User', userSchema);

module.exports = { User };
