const { Sequelize, DataTypes } = require("sequelize");

//connect  to database
const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '010995',
    port: '5432',
    database: 'registrations',  
});

module.exports = { db, DataTypes }