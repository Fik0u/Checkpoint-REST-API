const express = require("express")
const { addUser, fullList, findUser, updateUser, deleteUser } = require("../controllers/user.controllers")
// const User = require("../models/User")

const router = express.Router()


router.get('/test', (req , res) => {
    res.json('This is a test for my first route !')
} )

router.post('/addUser', addUser);
router.get('/all', fullList);
router.get('/:id', findUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router