const dbConfig = require('../config/db-config.js');
const mysqlConfig = require('../config/mysql-conf.js')
const Sequelize = require('sequelize');
const sequelize = new Sequelize('db_cosas', 'root', '1234', {
    host: "localhost",
    dialect:"mysql",
    port: 13306,
    pool:{
        max:5,
        min:0,
        acquire: 30000,
        idle: 10000
    }
})

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.cosa = require('./cosa.model.js')(sequelize, Sequelize);

module.exports = db;