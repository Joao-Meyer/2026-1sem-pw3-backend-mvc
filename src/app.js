const express = require("express")
const userRoutes = require("./routes/userRoutes")

const app = express()

app.get("/", (request, response) => {
    response.send("Estamos funcionando!")
})

app.use(express.json())

app.use("/users", userRoutes)

module.exports = app