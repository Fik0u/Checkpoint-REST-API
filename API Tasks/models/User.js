const mongoose = require("mongoose")

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

const User = mongoose.model('user', userSchema)
module.exports = User