const mongoose = require('mongoose'); // Variável mongoose que irá armazenar a conexão futura com o mongo

// Define the user schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 } // Ensure minimum length for passwords
}, { timestamps: true }); // Enable createdAt and updatedAt fields

// Define the book schema
const productSchema = new mongoose.Schema({ //nome, quantidade, valor, data_validade, id
    nome: {
        type: String,
        required: true
    },
    quantidade: {
        type: Number
    },
    valor: {
        type: String,
        required: true
    },

    data_validade: {
        type: String,
        required: true
    },

    genre: {
        type: String // Optional: Add a genre field
    }
}, { timestamps: true }); // Enable createdAt and updatedAt fields

// Export the models
const User = mongoose.model('User', userSchema);
const Product = mongoose.model('Product', productSchema);

module.exports = { User, Product }; // Export both models