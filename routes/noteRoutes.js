const router = require('express').Router()
const { Post, User, Note } = require('../models')
const passport = require('passport')

// router.get('/notes', async function (req, res) {
//   const notes = await Note.findAll()
//   res.json(notes)
// })
// GET all comments
router.get('/notes', passport.authenticate('jwt'), async function (req, res) {
  const notes = await Note.findAll({ include: [User, Post] })
  res.json(notes)
})

router.post('/notes', passport.authenticate('jwt'), async function (req, res) {
  const note = await Note.create({
    body: req.body.body,
    uid: req.user.id,
    pid: req.body.pid
  })
  res.json(note)
})

module.exports = router
