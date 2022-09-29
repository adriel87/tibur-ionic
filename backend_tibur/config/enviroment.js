require('dotenv').config()

const ENV = {
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_PORT: process.env.DB_PORT || 13306,
    DB_DIALECT: process.env.DB_DIALECT || 'mysql',
    DB_USER: process.env.DB_USER || 'root',
    DB_PASSWORD: process.env.DB_PASSWORD || '1234',
    DB_DATABASE: process.env.DB_DATABASE || 'db_cosas',
    PORT : process.env.PORT || 8080,
}

module.exports = ENV