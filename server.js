const express = require("express")

const app = express()

app.get("/", (request, response) => {
    response.send("Tô bão, e você?")
})

app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000")
})

