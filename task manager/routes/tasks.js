const express = require('express')
const router = express.Router();
const {
getAllTasks,
createTask,
getTask,
updateTask,
deleteTask } = require('../controller/taskController')

router.route('/tasks').get(getAllTasks).post(createTask);
router.route('/tasks/:id').get(getTask).post(updateTask).delete(deleteTask)

module.exports = router