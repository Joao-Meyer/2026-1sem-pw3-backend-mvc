const express = require("express")

const userController = require("./controllers/userController")

const app = express()

app.get("/", (request, response) => {
    response.send("Estamos funcionando!")
})

app.use(express.json())

app.post("/users", userController.createUser)

app.get("/users", userController.getAllUsers)

app.get("/users/:id", userController.getUserById)

app.put("/users/:id", userController.updateUser)

app.delete("/users/:id", userController.deleteUser)

module.exports = app