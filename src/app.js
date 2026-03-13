const express = require("express")
const userController = require("./controllers/userController")

const app = express()

app.get("/", (request, response) => {
    response.send("VAI CORINTHIANS!!!")
})

app.use(express.json())

app.post("/users", (req, res) => {
    console.log(req)

    res.send("Estamos testando")
})

app.get("/users", userController.getAllUsers)

module.exports = app