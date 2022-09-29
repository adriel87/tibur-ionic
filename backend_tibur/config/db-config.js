const {DB_HOST, DB_DIALECT, DB_PORT} = require("./enviroment")

module.exports={
    host: DB_HOST,
    dialect: DB_DIALECT,
    port: DB_PORT,
    pool:{
        max:5,
        min:0,
        acquire: 30000,
        idle: 10000
    }
}