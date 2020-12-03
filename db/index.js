const Sequelize = require('sequelize')

const sequelize = new Sequelize('mysql://root:rootroot@localhost/movies_db')

module.exports = sequelize
