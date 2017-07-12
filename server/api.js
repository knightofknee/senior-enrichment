'use strict'
const api = require('express').Router()
const { Student, Campus } = require('../db/models')

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({hello: 'world'}))

api.get('/students', (req, res, next) => {
	Student.findAll()
	.then(students => res.json(students))
	.catch(next)
})
api.get('/students/:id', (req, res, next) => {
	Student.findById(req.params.id)
	.then(student => res.json(student))
	.catch(next)
})
api.post('/students', (req, res, next) => {
	Student.create(req.body)
	.then(student => res.json(student))
	.catch(next)
})
api.put('/students/:id', (req, res, next) => {
	Student.findById(req.params.id)
	.then(student => student.update(req.body))
	.catch(next)
})
api.delete('/students/:id', (req, res, next) => {
	Student.destroy({where: {id: req.params.id}})
	.then(()=> res.status(204).end())
	.catch(next)
})


api.get('/campuses', (req, res, next) => {
	Campus.findAll()
	.then(campuses => res.json(campuses))
	.catch(next)
})
api.get('/campuses/:id', (req, res, next) => {
	Campus.findById(req.params.id)
	.then(campus => res.json(campus))
})
api.post('/campuses', (req, res, next) => {
	Campus.create(req.body)
	.then(campus => res.json(campus))
	.catch(next)
})
api.put('/campuses/:id', (req, res, next) => {
	Campus.findById(req.params.id)
	.then(campus => campus.update(req.body))
	.catch(next)
})
api.delete('/campuses/:id', (req, res, next) => {
	Campus.destroy({where: {id: req.params.id}})
	.then(()=> res.status(204).end())
	.catch(next)
})

module.exports = api
