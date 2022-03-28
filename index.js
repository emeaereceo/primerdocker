const express = require('express');
const handlebars = require('express-handlebars');
const routerApi = require('./routes');
const app = express();
const port = 4000;

const { create } = require('express-handlebars');
const hbs = create({
	partialsDir: ['views/partials'],
	extname: '.hbs',
});

// MOTOR DE PLANTILLA
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');
app.set('views', './views');

app.use(express.static(__dirname + '/public'));

routerApi(app);

app.listen(port, () => console.log('Estamos al aire'));
