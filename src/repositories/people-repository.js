const { pool, query } = require('../adapters/mysql');

class PeopleRepository {
    constructor() {
        this.table = 'people'
        this.pool = pool
        this.query = query
    }

    async findAll() {
        const sql = `SELECT * FROM ${this.table} WHERE deletedAt IS NULL`
        return this.query(sql);
    }

    async getById(id) {
        const sql = `SELECT * FROM ${this.table} WHERE id = ${id}`
        return this.query(sql)
    }

    async create(payload) {
        const { name, ocupation, city, state, contact } = payload
        const sql = `INSERT INTO ${this.table} (name, ocupation, city, state, contact) VALUES ('${name}', '${ocupation}', '${city}', '${state}', '${contact}')`
        return this.query(sql)
    }

    async findById(id) {
        const sql = `SELECT * FROM ${this.table} WHERE id = ${id}`
        return this.query(sql)
    }

    async updateById(id, payload) {
        const { name, ocupation, city, state, contact } = payload
        const sql = `
            UPDATE ${this.table}
            SET name = '${name}', ocupation = '${ocupation}', city = '${city}', state = '${state}', contact = '${contact}'
            WHERE id = ${id}`
        return this.query(sql)
    }

    async deleteById(id) {
        const sql = `DELETE FROM ${this.table} WHERE id = ${id}`
        return this.query(sql)
    }
}

module.exports = new PeopleRepository();