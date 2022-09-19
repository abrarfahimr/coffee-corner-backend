require('dotenv').config();

// Update with your config settings. Create env file and setup own user, password, and database file. 

module.exports = {
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
  },
};
