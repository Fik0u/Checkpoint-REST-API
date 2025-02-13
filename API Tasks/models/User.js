const mongoose = require("mongoose")

// Creation of a Schema
const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true
    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Adress: {
        type: String
    },
    Phone: Number,
},
    {timestamps: true,
})

// Making a model using the previous Schema
const User = mongoose.model('user', userSchema)

module.exports = User