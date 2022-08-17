const bcryptjs = require('bcryptjs')

module.exports = (app) => {
    //importar o package bcryptjs
    const bcryptjs = require('bcryptjs')

    //abrir a view registro.ejs
    app.get('/registro', (req, res) => {
        res.render('registro.ejs')
    })

    //para gravar os dados do formulário no database
    app.post('/registro', async (req, res) => {

        //pararecuperar as informações do formulário
        var dados = req.body

        //para verificar se o email ja está cadastrado
        //para conectar com o banco de dados
        const conexao = require('../config/database')()

        //para importar o modelo usuarios
        const usuarios = require('../models/usuarios')

        //para procurar no campo email da collection usuarios
        var procurar = await usuarios.findOne({ email: dados.email })
        if (procurar) {
            return res.send("email já cadastrado")
        }
        //para criptografar a senha
        var senhasegura = await bcryptjs.hash(dados.senha, 10)
        console.log(senhasegura)

        //para gravar o documento na collection usuarios
        var documento = await new usuarios({
            nome: dados.nome,
            email: dados.email,
            senha: senhasegura
        }).save()
        //para depois que grava redireciona para a rota login
        res.redirect('/login')
    })
}