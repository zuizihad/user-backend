class Users {
    constructor(){
        this.users = []
    }

    getAllUsers(){
        return this.users
    }

    getUserById(id){
        return this.users.find(user => user.id ===id)
    }

    createUser(user){
        user.id= this.users.length +1
        this.users.push(user)
        return user
    }

    updateUserById(id, updatedUser){
        let index = this.users.findIndex(user => user.id ===id)

        this.users[index].userName = updatedUser.userName || this.users[index].userName
        this.users[index].email = updatedUser.email || this.user[index].email
        this.users[index].firstName = updatedUser.firstName || this.users[index].firstName
        this.users[index].lastName = updatedUser.lastName || this.users[index].lastName
        this.users[index].job = updatedUser.job || this.users[index].job
        return this.users[index]        
    }

    deleteUserById(id){
        let index = this.users.findIndex(user=> user.id===id)
        let deleteObj = this.users[index]

        this.users = this.users.filter(user => user.id !== id)
        return deleteObj
    }
}

module.exports = new Users()