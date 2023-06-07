const mongoose = require('mongoose')

const Schema = mongoose.Schema

const quoteSchema = new Schema(
    {
        _id: Schema.Types.ObjectId,
        name: { type: String, required: true },
        description: { type: String, default: '' },
    },
    { timestamps: true }
)

module.exports = mongoose.model('Category', quoteSchema)
