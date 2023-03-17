const express = require('express')
const routes = express.Router()
const { peopleRouter } = require('./people')

routes.use(peopleRouter)

module.exports = {
    routes
}