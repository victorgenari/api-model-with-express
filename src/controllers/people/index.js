const { PeopleRepository } = require('../../repositories')

class PeopleController {
    async get(_request, response) {
        try {
            const people = await PeopleRepository.findAll();
            return response.status(200).json(people);
        } catch (error) {
            console.log(error);
            return response.status(500).json(error);
        }
    }

    async getById(request, response) {
        try {
            const { id } = request.params
            const [peopleExist] = await PeopleRepository.findById(id)
            if (!peopleExist) {
                return response.status(404).json({ msg: 'People not found!' })
            }

            const res = await PeopleRepository.getById(id)
            return response.status(200).json(res)
        } catch (error) {
            console.log(error);
            return response.status(500).json(error);
        }
    }

    async create(request, response) {
        try {
            const { name, ocupation, city, state, contact } = request.body
            const payload = {
                name,
                ocupation,
                city,
                state,
                contact
            }
            const res = await PeopleRepository.create(payload)
            return response.status(201).json(res)
        } catch (error) {
            console.log(error);
            return response.status(500).json(error);
        }
    }

    async update(request, response) {
        try {
            const { id } = request.params
            const { name, ocupation, city, state, contact } = request.body
            const payload = {
                name,
                ocupation,
                city,
                state,
                contact
            }

            const [peopleExist] = await PeopleRepository.findById(id)
            if (!peopleExist) {
                return response.status(404).json({ msg: 'People not found!' })
            }

            const res = await PeopleRepository.updateById(id, payload)
            return response.status(200).json(res)

        } catch (error) {
            console.log(error);
            return response.status(500).json(error);
        }
    }

    async delete(request, response) {
        try {
            const { id } = request.params
            const [peopleExist] = await PeopleRepository.findById(id)
            if (!peopleExist) {
                return response.status(404).json({ msg: 'People not found!' })
            }

            const res = await PeopleRepository.deleteById(id)
            return response.status(200).json(res)
        } catch (error) {
            console.log(error);
            return response.status(500).json(error);
        }
    }
}

module.exports = PeopleController;