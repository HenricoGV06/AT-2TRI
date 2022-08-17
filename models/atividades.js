//para importar o mongoose
const mongoose = require('mongoose')

//para criar a estrutura para o armazenamento das informações das atividades
const modelo = mongoose.Schema({
    data:Date,
    instrucoes:String,
    usuario:String,
    status:{type:Number,default:0}
})

//para gravar a estrutura na model atividades
const atividades = mongoose.model('atividades',modelo)

//para exportar os dados para acesso externo
module.exports = atividades