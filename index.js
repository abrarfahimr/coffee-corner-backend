const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const products = require('./routes/products')

const PORT = process.env.PORT;

//CORS middleware
app.use(cors());

//Middleware to give access to req.body
app.use(express.json());

//give access to urlencoded data.
app.use(express.urlencoded({ extended: true }));

//Middleware to serve up static files
app.use(express.static("public"));

//route to all products
app.use("/products", products);

//startup the local server. Change PORT to what is the value in respective env file.
app.listen(PORT, () => {
  console.log("Server is up and running")
})
