const mongoose = require('mongoose') // Variavel mongoose que irá armazenar
// a conexão futura com o mongo

// Define a estrutura para salvar o livro no banco de dados
const ProductSchema = new mongoose.Schema({
// titulo, tipo string, required indica que o parâmetro é obrigatório
nome: {
    type: String, required: true},
quantidade:{
    type: Number
},
valor:{
    type:String, required: true},

data_validade:{
        type:String, required: true}
});
// exportando o modelo para salvar os livros

module.exports = mongoose.model('Product',ProductSchema)