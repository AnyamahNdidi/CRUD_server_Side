const express = require('express')
const { readTodo, createTodo, UpdateTodo, DeleteTodo } = require('../controller/contodo')

const route = express.Router()

route.get('/', readTodo)
route.post('/post', createTodo)
route.patch('/:id', UpdateTodo)
route.delete('/:id', DeleteTodo)

module.exports = route