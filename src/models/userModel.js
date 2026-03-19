const users = require("../data/users")

const create = (user) => {
    users.push(user)

    return user
}

const findAll = () => {
    return users
}

const findById = (id) => {
    return users.find( user => user.id === id )
}

const update = (id, data) => {
    const user = users.find( user => user.id === id )

    if ( !user ) return null

    if ( data.name ) {
        user.name = data.name
    }

    return user
}

const remove = (id) => {
    const index = users.findIndex( user => user.id === id )

    if ( index === -1 ) return null

    const deleted = users[index]

    users.splice(index, 1)

    return deleted
}

module.exports = {
    create,
    findAll,
    findById,
    update,
    remove
}
