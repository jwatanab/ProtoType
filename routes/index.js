const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', (req, res) => {
  res.render('pages/flont')
})

router.get('/comfirm', (req, res) => {
  res.render('pages/comfirm')
})

router.get('/prompt', (req, res) => {
  res.render('pages/prompt')
})

router.get('/chat', (req, res) => {
  res.render('pages/chat')
})

module.exports = router;
