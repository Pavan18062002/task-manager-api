const express = require('express');
const router = express.Router();
const taskController = require('../controllers/tasksController');

router.post('/', taskController.createTask);
router.get('/', taskController.listTasks);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;
