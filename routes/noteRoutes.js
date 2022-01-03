const router = require('express').Router()
const { Note } = require('../models')

router.get('/notes', async function (req, res) {
  const notes = await Note.findAll()
  res.json(notes)
})

router.post('/notes', async function ({ body }, res) {
  const note = await Note.create(body)
  res.json(note)
})

module.exports = router