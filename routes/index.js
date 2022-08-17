module.exports = (app) => {
    //para a rota aleatória
    app.get('/', (req, res) => {
        
        res.render('index.ejs')
    })
}