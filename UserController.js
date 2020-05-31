const users = require('./User')

exports.getAllUsers = (req, res) =>{
    res.json(users.getAllUsers())
}

exports.createUser = (req, res) =>{
    let {userName, email, firstName, lastName, job } =req.body
    let user = users.createUser({
        userName, email, firstName, lastName, job
    })
    res.json(user)
}

exports.getUserById = (req, res) =>{
    let {id}  =req.params
    id = parseInt(id)

    let user = users.getUserById(id)
    res.json(user)
}

exports.updateUser = (req, res) =>{
    let {id} = req.params
    id = parseInt(id)

    let {userName, email, firstName, lastName, job}  = req.body
    let user = users.updateUserById(id, {
        userName, email, firstName, lastName, job
    })
    res.json(user)
}

exports.deleteUser = (req, res) =>{
     let {id} = req.params
     id = parseInt(id)

     let user = users.deleteUserById(id)
     res.json(user)
}