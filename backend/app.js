
const express = require("express");
const cors = require('cors');
const app = express();
const dotenv=require('dotenv').config()
const path = require('path')
const connectDatabase = require("./config/connectDatabase");
const products = require('./routes/product');
const orders = require('./routes/order');

connectDatabase();


app.use(express.json());
app.use(cors());
app.use('/api/v1/',products);
app.use('/api/v1/',orders);




app.listen(process.env.PORT, () => {
 console.log(`server lestening to ${process.env.PORT} in ${process.env.NODE_ENV}`)   
});
