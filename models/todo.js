const { DataTypes } = require('sequelize');
const sequelize = require('../utils/database')

const todo = sequelize.define('todo', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    done: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
})

module.exports = todo