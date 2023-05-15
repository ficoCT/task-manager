const Task = require('../models/Task')

const getAllTasks = (req, res) => {
    res.send('getAllTasks')
}

const createTask = (req, res) => {
    res.json(req.body)
}

const getTask = (req, res) => {
    res.json({id: req.params.id})
}
const deleteTask = (req, res) => {
    res.send('deleteTask')
}
const updateTask = (req, res) => {
    res.send('updateTask')
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
}

