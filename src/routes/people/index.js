const express = require('express');
const peopleRouter = express.Router();
const PeopleController = require('../../controllers/people');

const controller = new PeopleController();

peopleRouter.get('/people', controller.get);
peopleRouter.get('/people/:id', controller.getById);
peopleRouter.post('/people', controller.create);
peopleRouter.put('/people/:id', controller.update);
peopleRouter.delete('/people/:id', controller.delete);

module.exports = {
    peopleRouter
}