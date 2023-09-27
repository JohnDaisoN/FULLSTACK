require('dotenv').config();

const { response } = require('express');
const express = require('express');
const expresslayout = require('express-ejs-layouts');

const app = express();
const PORT = 3000 || process.env.PORT;

app.use(express.static('public'))

app.use(expresslayout);
app.set('layout','./layouts/main');
app.set('view engine','ejs');
app.use('/',require('./server/routes/main'));




app.listen(PORT, ()=>{
    console.log('App listening on port PORT');
});

