const express = require("express")

//Require of the routes
const { addUser, fullList, findUser, updateUser, deleteUser } = require("../controllers/user.controllers")

const router = express.Router()


router.get('/test', (req , res) => {
    res.json('This is a test for my first route !')
} )

// With POSTMAN
router.post('/addUser', addUser);
router.get('/all', fullList);
router.get('/:id', findUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router