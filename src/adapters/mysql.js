const mysql = require('mysql');

const connectionCredentials = {
    connectionLimit: Number(process.env.MYSQL_POOL_CONNECTION_LIMIT),
    host: process.env.MYSQL_HOST,
    port: Number(process.env.MYSQL_PORT),
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}

const pool = mysql.createPool(connectionCredentials);

const pooledConnection = async (action) => {
    const connection = await new Promise((resolve, reject) => {
        pool.getConnection((error, conn) => {
            return error ? reject(error) : resolve(conn);
        });
    });

    try {
        return await action(connection);
    } finally {
        connection.release();
    }
};

const query = async (query, values = []) => {
    return pooledConnection(async connection => {
        const result = await new Promise((resolve, reject) => {
            connection.query(query, values, (error, rows) => {
                return error ? reject(error) : resolve(rows);
            });
        });

        return JSON.parse(JSON.stringify(result));
    });
};

module.exports = {
    pool,
    query
};