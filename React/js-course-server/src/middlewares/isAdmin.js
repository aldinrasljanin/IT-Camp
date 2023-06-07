const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization
        const decoded = jwt.verify(token, process.env.JWT_KEY)
        if (decoded.isAdmin) {
            req.user = decoded
            next()
        } else {
            throw Error
        }
    } catch (error) {
        return res.status(401).json({
            message: 'Niste administrator i zato ovaj zahtev nije obrađen.',
        })
    }
}
