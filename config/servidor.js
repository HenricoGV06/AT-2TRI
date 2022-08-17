//para importar o express
const express = require('express')

//para executar o express
const app = express()

//para definir a porta do servidor local
const porta = process.env.PORT || 3050

//para definir a pasta dos arquivos estaticos (css, imagens, jquery)
app.use(express.static('./assets'))

//para definir o express como body parse
app.use(express.urlencoded({extended:false}))

//para exportar o app e a porta
module.exports={app,porta}