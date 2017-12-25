const express = require('express')
const router = express.Router()

/* do Routing */

router.get('/confirm', (req, res) => {
  res.render('pages/users/confirm')
})

router.get('/prompt', (req, res) => {
  res.render('pages/users/prompt')
})

router.get('/chat', (req, res) => {
  res.render('pages/users/chat')
})

router.get('/plans', (req, res) => {
  res.render('pages/users/plans')
})

module.exports = router;
