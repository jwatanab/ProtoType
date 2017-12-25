const express = require('express')
const router = express.Router()

/* do Routing */

router.get('/index', (req, res) => {
    res.render('pages/owner/index')
})

router.get('/prompt', (req, res) => {
    res.render('pages/owner/prompt')
})

router.get('/confirm', (req, res) => {
    res.render('pages/owner/confirm')
})

router.get('/chat', (req, res) => {
    res.render('pages/owner/chat')
})


module.exports = router;
