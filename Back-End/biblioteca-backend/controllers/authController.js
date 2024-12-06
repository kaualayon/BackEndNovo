const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models/User'); 

exports.registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try{
    //Criptografa a senha antes de salvar no banco de dados
    const hashedPassword = await bcrypt.hash(password, 10)

    //Cria um novo usuario com nome de usuario e senha criptografadas
    const newUser = new User({username, email,  password: hashedPassword});
    await newUser.save(); //Salva o usuario no bd

    res.status(201).json({   message: 'Usuario registrado com sucesso!'}); //Responde com sucesso ao registrar
  }catch(error){
    res.status(500).json({ error: 'Erro ao registrar usuário!'}); //Responde com erro ao registrar
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try{
    //Busca o usuario pelo nome de usuario
    const user = await User.findOne({email});
    if(!user) return res.status(400).json({ error: 'Usuário não encontrado'}); //Retorna erro se o usuario não existir

    //Compara a sneha fornecida com a senha armazenada no banco
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) return res.status(400).json({ error: 'Senha incorreta'}); //Retorna erro se a senha estiver incorreta


    //Cria o token JWT para autenticação
    const token = jwt.sign({ id: user._id}, process.env.JWT_SECRET, {expiresIn: '1h'}); //Token expira em 1 hora
    res.status(200).json({
      username: user.username,
      token,
    });

  
  }catch (error) {
    // Se o erro for 403, significa que a conta está desativada
    if (error.response && error.response.status === 403) {
      alert('Sua conta está desativada. Entre em contato com o suporte.');
    } else {
      alert('Erro ao fazer login. Verifique suas credenciais.');
    }
    console.error('Erro ao fazer login:', error);
  }
};

exports.getUser = async (req, res) => {
  // Tente pegar o token do cabeçalho da requisição
  const token = req.headers.authorization?.split(' ')[1]; // Obtém o token que está no formato "Bearer <token>"

  // Verifica se o token foi fornecido
  if (!token) {
    return res.status(401).json({ error: 'Token não fornecido' }); // Se não houver token, retorna erro
  }

  try {
    // Verifica e decodifica o token JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verifica o token usando a chave secreta

    // Busca o usuário no banco de dados com o ID decodificado
    const user = await User.findById(decoded.id); // Aqui, "decoded.id" é o ID do usuário no token

    // Se o usuário não for encontrado
    if (!user) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    // Retorna apenas o username do usuário, sem os outros dados
    res.json({ username: user.username });
  } catch (err) {
    // Caso ocorra algum erro, como um erro na verificação do token
    return res.status(500).json({ error: 'Erro ao obter dados do usuário' });
  }
};

// Atualiza o status ativo/inativo de um usuário
exports.toggleUserStatus = async (req, res) => {
  const { id } = req.params; // ID do usuário vindo dos parâmetros
  const { active } = req.body; // Novo status ativo/inativo

  try {
    // Verifica se o usuário existe
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    // Atualiza o status
    user.active = active;
    await user.save();

    res.status(200).json({ message: 'Status do usuário atualizado com sucesso', user });
  } catch (error) {
    console.error('Erro ao atualizar o status do usuário:', error);
    res.status(500).json({ message: 'Erro interno ao atualizar o status do usuário' });
  }
};