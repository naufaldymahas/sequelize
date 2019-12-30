const Train = require('../3.models/train');

module.exports = {
    getAll: async (req, res) => {
        try {
            const data = await Train.findAll()
            res.json(data)
        } catch (error) {
            console.log(error)
        }
    },

    getById: async (req, res) => {
        try {
            const { id } = req.params
            const data = await Train.findByPk(id)
            if (data) res.send(data)
            else res.status(404).send()
            res.send(data)
        } catch (error) {
            console.log(error)
        }
    }
};