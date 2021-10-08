const mongoose = require('mongoose')

const todoschema = mongoose.Schema({
  title: {
    type: String,
    require: require
  },
  content: String
}, { timestamps: true })

const todo = mongoose.model('todo', todoschema)

module.exports = todo