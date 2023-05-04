const getAllTasks = (req, res) => {
    res.send('getAllTasks')
}

const createTask = (req, res) => {
    res.send('createTask')
}

const getTask = (req, res) => {
    res.send('getTask')
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

