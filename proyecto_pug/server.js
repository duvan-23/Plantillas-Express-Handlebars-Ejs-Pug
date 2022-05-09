const express = require('express')


const app = express()

const personas =[];
app.use(express.urlencoded({extended:true}))
app.set('views', './views')

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('historial', {personas:personas})
})
app.post('/personas', (req, res) => {
    personas.push(req.body)
    res.redirect('/');
});

const server = app.listen(8080, ()=>{
    console.log("Servidor esta corriendo satisfactoriamente");
})
