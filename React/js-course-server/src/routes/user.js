const express = require('express')
const { body } = require('express-validator')
const router = express.Router()
const jwt = require('jsonwebtoken')

const userController = require('../controllers/user')
const isAuth = require('../middlewares/isAuth')
const isAdmin = require('../middlewares/isAdmin')

const User = require('../models/user')

// Login
router.post(
    '/login',
    [
        body('email').isEmail().withMessage('Unesite ispravnu e-mail adresu.'),
        body('password')
            .isLength({ min: 6 })
            .withMessage('Šifra mora imati više od 6 a manje od 20 karaktera')
            .isAlphanumeric()
            .trim(),
    ],
    userController.login
)

// Signup
router.post(
    '/signup',
    [
        body('email')
            .trim()
            .isEmail()
            .withMessage('Unesite ispravnu e-mail adresu.')
            .isLength({ min: 6, max: 100 })
            .custom((value, { req }) => {
                return User.findOne({ email: value }).then((userDoc) => {
                    if (userDoc) {
                        return Promise.reject(
                            'E-Mail već postoji. Izaberi neki drugi.'
                        )
                    }
                })
            }),
        body(
            'password',
            'Unesi šifru sa najmanje 6 a najviše 20 karaktera koristeći samo slova i brojeve.'
        )
            .trim()
            .isLength({ min: 6, max: 20 })
            .isAlphanumeric(),
        body('fullName', 'Unesi ispravno puno ime i prezime.').isLength({
            min: 3,
            max: 40,
        }),
        body('confirmPassword')
            .custom((value, { req }) => {
                if (value !== req.body.password) {
                    throw new Error('Unete šifre moraju biti iste.')
                }
                return true
            })
            .trim(),
    ],
    userController.signup
)

// Get all users
// router.get('/users', isAdmin, userController.allUsers);
// router.get('/get-winners', isAdmin, userController.getWinners);

// Get user's info
// router.get('/users/:userId', isAuth, userController.getUserInfo);

// Edit user
router.patch(
    '/user/:userId',
    body(
        'password',
        'Unesi šifru sa najmanje 6 a najviše 20 karaktera koristeći samo slova i brojeve.'
    )
        .trim()
        .isLength({ min: 6, max: 20 })
        .isAlphanumeric()
        .custom((value, { req }) => {
            const token = req.headers.authorization
            const decoded = jwt.verify(token, process.env.JWT_KEY)
            if (decoded.userId !== req.params.userId && !decoded.isAdmin) {
                throw new Error('Vi ne možete mijenjati šifru ovog korisnika.')
            }
            return true
        }),
    isAuth,
    userController.editUser
)

// Detele user
router.delete('/user/:userId', isAdmin, userController.deleteUser)

router.patch('/set-winner/:userId', isAdmin, userController.setWinner)

module.exports = router
