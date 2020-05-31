const router = require('express').Router()
const {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
  } = require('./UserController')
router.get('/', getAllUsers)
router.post('/', createUser)
router.get('/:id', getUserById)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router