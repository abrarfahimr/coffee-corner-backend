# Project Title
Coffee Corner Backend

Check out the API here: https://coffee-corner-backend.herokuapp.com/products

## Description
This is the backend server for my fullstack capstone project at BrainStation called Coffee Corner. It is a dashboard for a startup company focused on selling different brands of coffee.The goal to help make better business decisions through dynamic data visualization and manage and maintain data on products and customers.

The project was built with two key areas of focus. Data management and Data visualization. Data management using CRUD operation And data visualization with graphs and charts to know how well the business is doing and find areas of high and low potential.

While working I came into some problems and areas of opportunity that I want to highlight from future sprints. First is an opportunity to dynamically update statistics as new transactions happen. Building for real time statistics such as that of salesforce is an important opportunity area to consider so users can immediately see major issues as soon as they happen. One functionality issue I found while creating the product page was the images being imported into a fake directory instead of a public library in the backend server

### Dependencies
Node.js, Express, Knex.js, mysql, cors, dotenv, nodemon, uuid

### Tech Stack
Frontend: HTML, CSS, Javascript, React
Backend: Node.js, Express, Knex.js
Database: MySQL, MySQL Workbench
Others: Auth0, Recharts, Heroku, Postman
### Installation
1. Clone this repository:

```
git clone git@github.com:abrarfahimr/coffee-corner-backend.git
```
2. In your mySQL workbench create a new schema, you can call it whatever you want. I would suggest calling it “CoffeeCornerDB.”

3. Create a .env file inside the client directory and write the following code:
```
PORT=USER_PORT
DB_HOST= 127.0.0.1
DB_USER= USER_DB
DB_PASSWORD= USER_PASSWORD 
DB_DATABASE= USER_DATABASE
```
Note: The DB_USER. DB_PASSWORD must match the username and password for your mySQL account. The DB_DATABASE is the name of the database you set in the previous step. and the PORT can be set to whatever you want like 8080 or 5000.

4. In the terminal write the following.

To install node modules
```
npm install
```

Migrate to the lastest database:
```
npm run migrate
```

Seed the default data:
```
npm run seed
```

5. Start up the database:
```
npm start
```

### Endpoints
There are three main endpoints for the backend server. Each end point as a id associated with it.

* The endpoint /products will lead to all the list of products and information about them.
* /products/:id where :id is the id of each product object in the array. This will lead to details of  individual products.
* /transactions lead to all the list of transactions and information about them.

### Authors
Abrar Fahim Rahman: [Github](https://github.com/abrarfahimr)
