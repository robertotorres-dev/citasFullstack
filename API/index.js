const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const bodyParser = require ('body-parser');

//crear el servidor
const app = express();

//conectar a mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://root:root@cluster0.cdjfn.mongodb.net/veterinaria?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

//habilitar el body-parser.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// habilitar routing
app.use('/', routes());

// puerto y arrancar servidor
app.listen(4000, ()=> {
  console.log('Servidor funcionando');
});

