const router = require('express').Router()
const { Movie } = require('../models')

router.get('/movies', (req, res) => {
  Movie.findAll()
    .then(movies => res.json(movies))
    .catch(err => console.log(err))
})

router.post('/movies', (req, res) => {
  Movie.create(req.body)
    .then(movie => res.json(movie))
    .catch(err => console.log(err))
})

router.put('/movies/:id', (req, res) => {
  Movie.update(req.body, { where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

router.delete('/movies/:id', (req, res) => {
  Movie.destroy({ where: { id: req.params.id } })
    .then(() => res.sendStatus(200))
    .catch(err => console.log(err))
})

module.exports = router