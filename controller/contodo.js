const mongoose = require('mongoose')
const contodo = require('../Model/todo')

const readTodo = async (req, res) => {

  try {
    const getstodo = await contodo.find()
    res.status(200).json(getstodo)
  } catch (err) {
    res.status(404).json({ message: err.message })
  }

}

const createTodo = async (req, res) => {
  const todo = new contodo(req.body)

  try {
    await todo.save()
    res.status(201).json(todo)
  } catch (err) {
    res.status(409).json({ message: err.message })
  }
}

const UpdateTodo = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`the id ${id} is npt valid`)
  }

  const todo = { title, content, _id: id };
  await contodo.findByIdAndUpdate(id, todo, { new: true })
  res.json(contodo)
}

const DeleteTodo = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`the id ${id} is not valid`)
  }
  await contodo.findByIdAndDelete(id)

  res.json({ message: "delete sucessfully" })


}



module.exports = {
  readTodo,
  createTodo,
  UpdateTodo,
  DeleteTodo
}