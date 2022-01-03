const router = require('express').Router()
const { Post } = require('../models')

router.get('/posts', async function (req, res) {
  const posts = await Post.findAll()
  res.json(posts)
})

router.post('/posts', async function ({ body }, res) {
  const post = await Post.create(body)
  res.json(post)
})

router.delete('/posts', async function ({ params: { id }}, res) {
  await Post.destroy({ where: { id } })
  res.sendStatus(200)
})

module.exports = router