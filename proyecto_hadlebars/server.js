const express = require('express')
const handlebars = require('express-handlebars')

const app = express()

const personas =[];
app.use(express.urlencoded({extended:true}))
app.engine('handlebars', handlebars.engine())

app.set('views', './views')

app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
    res.render('formulario')
})

app.post('/personas', (req, res) => {
    personas.push(req.body)
    res.render('historial',{personas:personas})
});

const server = app.listen(8080, ()=>{
    console.log("Servidor esta corriendo satisfactoriamente");
})