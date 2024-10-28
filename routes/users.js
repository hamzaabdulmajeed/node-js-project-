import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
    res.send({ message: "Users fetched successfully!" })
})

router.post('/addUser', (req, res) => {
    res.send({ message: "Users added successfully" })
})

router.put('/updateUser', (req, res) => {
    res.send({ message: "User updated successfully" })
})

router.delete('/deleteUser', (req, res) => {
    res.send({ message: "User deleted successfully" })
})

export default router