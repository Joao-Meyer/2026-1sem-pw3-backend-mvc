const userModel = require("../models/userModel")

const createUser = (req, res) => {
    const { name } = req.body

    const newUser = {
        id: Date.now(),
        name
    }

    const createdUser = userModel.create(newUser)

    return res.status(201).json(createdUser)
}

const getAllUsers = (req, res) => {
    const users = userModel.findAll()

    return res.json(users)
}

module.exports = {
    createUser,
    getAllUsers
}