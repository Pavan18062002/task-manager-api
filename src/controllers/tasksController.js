const Task = require('../models/Task');

let tasks = []; 

const createTask = (req, res) => {
    const { title, description } = req.body;
    const id = tasks.length + 1;
    const status = 'pending';
    const newTask = new Task(id, title, description, status);
    tasks.push(newTask);
    res.status(201).json(newTask); 
};



const listTasks = (req, res) => {
    res.json(tasks);
};

const updateTask = (req, res) => {
    const taskId = parseInt(req.params.id);
    const { title, description, status } = req.body;
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
        tasks[taskIndex].title = title || tasks[taskIndex].title;
        tasks[taskIndex].description = description || tasks[taskIndex].description;
        tasks[taskIndex].status = status || tasks[taskIndex].status;
        res.json(tasks[taskIndex]);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
};

const deleteTask = (req, res) => {
    const taskId = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(task => task.id === taskId);
    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
};

module.exports = {
    createTask,
    listTasks,
    updateTask,
    deleteTask
};
