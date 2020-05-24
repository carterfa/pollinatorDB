//Sequelize set up
const Sequelize = require('sequelize');

module.exports = new Sequelize('pollinator', 'app', null, {
    dialect: 'mysql',
    host: '34.74.46.36',
    logging: false,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});