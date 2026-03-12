const users = require("../data/users")

const create = (user) => {
    users.push(user)

    return user
}

const findAll = () => {
    return users
}

module.exports = {
    create,
    findAll
}
