// Cria as rotas
const express = require('express') // importa o express para criar o servidor
const Product = require('../models/Produto') // importa o modelo dos livros Book.js
const router = express.Router(); // cria o elemento para rotear com base nas requisições

// Cria rota do post
// async é por conta que a requisição tem um certo tempo para retornar
router.post('/',async(req,res)=>{
const {nome, quantidade, valor, data_validade} = req.body; // Extrai os dados da requisição
// tenta salvar o livro no banco de dados
try{
    const newProduct = new Product({nome, quantidade, valor, data_validade});
    await newProduct.save();
    // 201 - código de status 
    res.status(201).json(newProduct);
}catch(error){
    res.status(500).json({message:'Erro ao cadastrar produto'});
}

});

// rota Get
// req - requisição
// res - resposta
router.get('/',async(req,res)=>{
try{
    const produtos = await Product.find(); // busca todos os livros com o metódo find
    res.status(200).json(produtos) // retorna a lista de livros
}catch(error){
    res.status(500).json({message: 'Erro ao buscar os produtos ',error}) // retorna o erro se houver
}
});

// put - modifica elemento 
router.put('/:id',async(req,res)=>{
    const {nome, quantidade, valor, data_validade} = req.body; // extrai o conteudo da requisição
try{
const updatedproduct = await Product.findByIdAndUpdate(req.params.id,{nome, quantidade, valor, data_validade},{new: true});
res.status(200).json(updatedproduct);
}catch(error){
    res.status(500).json({message:'Erro ao atualizar produto',error}); 
}
})
// delete - deleta elemento pelo id
router.delete('/:id',async(req,res)=>{
    try{
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json({message:'Produto deletado com sucesso'});
    }catch(error){
        res.status(500).json({message:'Erro ao deletar produto',error});
    }

})
// exporta o roteador para usar no server.js
module.exports = router