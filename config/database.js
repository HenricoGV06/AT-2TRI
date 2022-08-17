//para importar o mongoose
const mongoose = require('mongoose')

//scripts de conexão
const conn = async()=>{
    const atlas = await mongoose.connect('mongodb+srv://Fernando1403:Cluster111@cluster1.uman3.mongodb.net/todo_list')
}

//para exportar as infomações para acesso externo
module.exports = conn 