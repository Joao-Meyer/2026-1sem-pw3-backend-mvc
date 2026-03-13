const userModel = require("../models/userModel")

const getAllUsers = (req, res) => {
    const users = userModel.findAll()

    return res.json(users)
}

module.exports = {
    getAllUsers
}