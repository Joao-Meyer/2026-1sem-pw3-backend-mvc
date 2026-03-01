const express = require("express")

const userController = require("./controllers/userController")

const app = express()

app.get("/", (request, response) => {
    response.send("Estamos funcionando!")
})

app.get("/users", userController.getAllUsers)

module.exports = app