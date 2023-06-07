const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema(
    {
        email: String,
        password: String,
        fullName: String,
        isWinner: {
            type: Boolean,
            default: false,
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        isGuest: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model('User', UserSchema)
