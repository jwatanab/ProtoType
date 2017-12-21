const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', (req, res) => {
  res.render('pages/flont')
})

<<<<<<< HEAD
router.get('/comfirm', (req, res) => {
=======
router.get('/confirm', (req, res) => {
>>>>>>> cf4a3bd7c45d1ef6720776297172d95e21d660f1
  res.render('pages/comfirm')
})

router.get('/prompt', (req, res) => {
  res.render('pages/prompt')
})

router.get('/chat', (req, res) => {
  res.render('pages/chat')
})

module.exports = router;
