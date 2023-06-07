const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Category = require('../models/category')

exports.getAll = async (req, res) => {
    const result = await Category.find()
    res.json(result)
}
