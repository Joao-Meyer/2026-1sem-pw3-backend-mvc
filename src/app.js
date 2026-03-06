const express = require("express")

const app = express()

app.get("/", (request, response) => {
    response.send("VAI CORINTHIANS!!!")
})

app.get("/users", (req, res) => {
    res.send([
        {
            "id" : 1,
            "name" : "Joao",
            "idade" : 25
        },
        {
            "id" : 2,
            "name" : "Paulo",
            "idade" : 27
        }
    ])
})

module.exports = app