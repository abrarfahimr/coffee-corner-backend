const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

const productsRoute = require('./routes/productsRoute');
const transactionRoute = require('./routes/transactionRoute');

const PORT = process.env.PORT ?? 8080;

//CORS middleware
app.use(cors());

//Middleware to give access to req.body
app.use(express.json());

//give access to urlencoded data.
app.use(express.urlencoded({ extended: true }));

//Middleware to serve up static files
app.use(express.static("public"));

//route to all products
app.use('/products', productsRoute);
app.use('/transactions', transactionRoute)

//startup the local server. Change PORT to what is the value in respective env file.
app.listen(PORT, () => {
  console.log("Server is up and running")
})
