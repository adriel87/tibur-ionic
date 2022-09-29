const ENV = require("./enviroment");

module.exports={
    USER: ENV.DB_USER,
    PASSWORD: ENV.DB_PASSWORD,
    DB: ENV.DB_DATABASE,
}