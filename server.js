const express = require('express');
const expressLayout = require('express-ejs-layouts');
const ejs = require('ejs');
const path = require('path');
const app = express();

app.get('/',(req,res)=>{
    res.render('home')
})

app.use(expressLayout);
app.set('views',path.join(__dirname,'/resources/views'));
app.set('view engine','ejs')

app.listen(3000, ()=>{
    console.log('Listening on port 3000');
})