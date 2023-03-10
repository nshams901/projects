const Task = require('../models/task');


const getAllTasks = (req, res) => {
    res.send('get all tasks')
}

const createTask = async ( req, res) => {
    const task = await Task.create(req.body);
    console.log(req.body);
    res.status(201).send(task)
}

const getTask = ( req, res) => {
    res.send('one task');
}

const updateTask = ( req, res) => {
    res.send('task updated')
}

const deleteTask = ( req, res) => {
    res.send('task deleted')
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
};