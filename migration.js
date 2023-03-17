require('dotenv').config()
const mysql = require('mysql')
const migration = require('mysql-migrations')

const params = {
    host: process.env.MYSQL_HOST,
    user: process.env.NYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    connectionLimit: process.env.MYSQL_POOL_CONNECTION_LIMIT,
}

const connection = mysql.createPool(params)

migration.init(connection, `${__dirname}/migrations`, () => {
    console.log('Completed running migrations')
})