const dbConfig = require('../config/db-config.js');
const {DB,USER,PASSWORD} = require('../config/mysql-conf.js')
const Sequelize = require('sequelize');
const sequelize = new Sequelize(DB, USER, PASSWORD, {...dbConfig})

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.cosa = require('./cosa.model.js')(sequelize, Sequelize);

module.exports = db;