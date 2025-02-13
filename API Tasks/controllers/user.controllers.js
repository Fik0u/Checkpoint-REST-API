const User = require("../models/User")

//! CRUD OPERATIONS:
// I - POST Method (CREATE)
exports.addUser = async(req, res) =>{
    try {
        const {Name, Email, Adress, Phone} = req.body
        const userAdded = new User({...req.body})
        await userAdded.save()
        res.status(201).json({msg: "User added successfully to DB", userAdded})
    } catch (error) {
        res.status(400).json(error)
    }
}

// II.1 - GET Method (READ All)
exports.fullList = async(req, res) => {
    try {
        const listUsers = await User.find()
        res.status(200).json({msg: "List of all users", listUsers})
    } catch (error) {
        res.status(400).json(error)   
    }
}

// II.2 - GET Method (READ One)
exports.findUser = async(req, res) => {
    try {
        const {id} = req.params
        const getUser = await User.findById(id)
        res.status(200).json({msg: "User with ID found successfully", getUser})
    } catch (error) {
        res.status(404).json(error)    
    }
}

// III - PUT Method (UPDATE)
exports.updateUser = async(req, res) => {
    try {
        const {id} = req.params
        const userUpdated = await User.findByIdAndUpdate(id, {$set:{...req.body}}, {new:true})
        res.status(200).json({msg: "User with ID updated successfully", userUpdated})
    } catch (error) {
        res.status(400).json(error)
    }
}

// IV - DELETE Method (DELETE)
exports.deleteUser = async(req, res) => {
    try {
        const {id} = req.params
        const userDeleted = await User.findByIdAndDelete(id)
        if(!userDeleted){    // Optimise the response
            return res.status(404).json("Couldn't find the user with ID")}

        res.status(200).json({msg: "User with ID deleted successfully", userDeleted})
    } catch (error) {
        res.status(400).json(error)
        
    }
}