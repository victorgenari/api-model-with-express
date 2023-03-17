require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { routes } = require('./routes');

class Application {
    constructor() {
        this.express = express();
        this.useCors();
        this.middlewares()
        this.useRoutes();
    }

    useCors() {
        this.express.use(cors());
    }

    useRoutes() {
        this.express.use(routes);
    }

    middlewares() {
        this.express.use(express.json())
        this.express.use(express.urlencoded({ extended: true }))
    }
}

module.exports = new Application();