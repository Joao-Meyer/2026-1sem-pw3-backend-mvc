const userModel = require("../models/userModel")

const getAllUsers = (req, res) => {
    const users = userModel.findAll()

    return res.json(users)
}

const createUser = (req, res) => {
    // const {
    //     name,
    //     age
    // } = req.body
    
    const name = req.body.name
    const age = req.body.age

    // const newUser = {
    //     name,
    //     age
    // }

    const newUser = {
        id : Date.now(),
        name : name,
        age : age
    }

    const createdUser = userModel.create(newUser)
    
    res.status(201).json(createdUser)
}

const getUserById = (req, res) => {
    const id = req.params.id

    const user = userModel.findById(id)

    if ( !user ) {
        return res.status(404).json({
            message: "Usuário não encontrado."
        })
    }

    return res.json(user)
}

module.exports = {
    getAllUsers,
    createUser,
    getUserById
}