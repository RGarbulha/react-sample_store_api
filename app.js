const express = require('express')
const app = express()
const hostname = 'localhost'
const port = process.env.PORT||8080
require('dotenv').config()

var products = require('./api/products/products')
app.use('/products', products)

app.get('/', function (req, res) {
  console.log(process.env.NAME)
    res.send({msg: "Hello world"})
})



app.listen(port,hostname , () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  
});