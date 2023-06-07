const mongoose = require('mongoose')

const Schema = mongoose.Schema

const quoteSchema = new Schema(
    {
        _id: Schema.Types.ObjectId,
        quoteText: String,
        quoteAuthor: String,
        quoteSource: String,
        likes: { type: Number, default: 0 },
        category: { type: Schema.Types.ObjectId, ref: 'Category' },
    },
    { timestamps: true }
)

module.exports = mongoose.model('Quote', quoteSchema)
