const { Router } = require('express');
const { createTaskController, listTaskController, getTaskById } = require('../controllers/taskController')

const teste = new Router();
teste.get('/tasks', listTaskController );
teste.get('/tasks/:id', getTaskById );
teste.post('/tasks/new', createTaskController);
// teste.put('/tasks/:id', updateTask);
// teste.delete('/recipes/:id', removeRecipe);

module.exports = {
    teste,
};
