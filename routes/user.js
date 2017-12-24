const express = require('express')
const router = express.Router()

/* do Routing */
router.get('/', (req, res) => {
  res.render('pages/flont')
})

router.get('/confirm', (req, res) => {
  res.render('pages/users/confirm')
})

router.get('/prompt', (req, res) => {
  res.render('pages/users/prompt')
})

router.get('/chat', (req, res) => {
  res.render('pages/users/chat')
})

module.exports = router;
