//para importar o mongoose
const mongoose = require('mongoose')

//para criar a estrutura para o armazenamento das informações do usuário 
const modelo = mongoose.Schema({
    nome:String,
    email:String,
    senha:String
})

//para gravar a estrutura na model usuários
const usuarios = mongoose.model('usuarios',modelo)

//para exportar os dados para acesso externo
module.exports = usuarios