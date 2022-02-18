const { listTasks, createTask, getTaskId, updateStatus, removeTaskSer } = require('../services/taskService');

const listTaskController = async (_req, res, next) => {
  try {
    const tasks = await listTasks();

    return res.status(200).json(tasks);
  } catch (err) {
    return next(err);
  }
};

const createTaskController = async (req, res, next) => {
  try {
    const { tarefa, status } = req.body;
    //   const { authorization: token } = req.headers;

    const task = await createTask(tarefa, status);
    return res.status(201).json(task);
  } catch (error) {
    return next(error);
  }
};

const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await getTaskId(id);
    return res.status(200).json(task);
  } catch (err) {
    return err;
    // next(err);
  }
};

const updateTask = async (req, res, next) => { // atualizar o que? o status?
  try {
    const { id } = req.params;
    const upTask = await updateStatus(id, req.body);
    console.log(upTask, 'uptaskcontroller');
    return res.status(200).json(upTask);
  } catch (err) {
    next(err);
  }
};

const removeTask = async (req, res, next) => { // atualizar o que? o status?
  try {
    const { id } = req.params;
    const delTask = await removeTaskSer(id);
    console.log(delTask, 'DELtaskcontroller');
    return res.status(204).json(delTask);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createTaskController, listTaskController, getTaskById, updateTask, removeTask,
};
