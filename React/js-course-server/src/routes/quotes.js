const express = require('express')

const router = express.Router()

const quotesController = require('../controllers/quote')
const isAuth = require('../middlewares/isAuth')

router.get('/get-quote/:quoteId', quotesController.getQuote)
router.get(
    '/get-by-category/:categoryId',
    quotesController.getAllQuotesByCategory
)
router.get('/get-all-quotes', quotesController.getAllQuotes)
router.get('/get-random-quote', quotesController.getRandomQuote)
router.post('/add-quote', isAuth, quotesController.addQuote)
router.patch('/like/:quoteId', quotesController.likeQuote)
router.patch('/edit/:quoteId', isAuth, quotesController.editQuote)
router.delete('/delete/:quoteId', isAuth, quotesController.deleteQuote)

module.exports = router
