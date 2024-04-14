const Sequelize = require("sequelize");

const database = new Sequelize("company-reviews", "root", "705043", {
    dialect: "mysql",
    host: "localhost"
})

module.exports = database;