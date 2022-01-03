const router = require('express').Router()
const { User } = require('../models')

router.get('/users/:id', async function ({ params: { id } }, res) {
  const user = await User.findOne({ where: { id } })
  res.json(user)
})

router.post('/users', async function (req, res) {
  const user = await User.create(req)
  res.json(user)
})

module.exports = router