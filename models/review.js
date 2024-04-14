const { DataTypes } = require("sequelize");

const database = require("../config/database");

const Review = database.define('reviews', {
    companyname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pros: {
        type: DataTypes.STRING,
        allowNull: false
    },
    cons: {
        type: DataTypes.STRING,
        allowNull: false
    },
    star: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});


module.exports = Review;