const express = require('express')
const app = express();

const hbs = require('hbs');

require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/partials/');
//Express HBS engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    //res.send('Hello World')
    //let salida = {
    //    nombre: 'Matias',
    //    edad: '30',
    //    url: req.url
    //};

    res.render('home', {
        tittle: 'Pagina Prueba',
        year: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        year: new Date().getFullYear()
    });
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${ port } `);
})