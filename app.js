const express=require('express');
const app=express();
const bodyParser= require('body-parser');
const mongoose = require('mongoose');
const morgan= require('morgan');
const router=require('./routes/products')

const url="mongodb+srv://shreyashmundlik:Pass%40123@cluster0.imfknkp.mongodb.net/test"

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended:true}));

app.use(morgan('dev'));

mongoose.connect(url)
app.use('/products',router);
module.exports=app;
