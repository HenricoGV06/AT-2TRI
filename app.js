const servidor = require('./config/servidor')

const app = servidor.app

const porta = servidor.porta

//para impotar o consign e conigurar
const consign = require('consign')
consign().include('./routes').into(app)

app.listen(porta,()=>{
    console.log("http://localhost:"+porta)
})