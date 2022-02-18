const {
  getAllTasks, addTask, getTaskById, updateTask, removeTask,
} = require('../models/tasks');

const listTasks = async () => {
  const allTasks = await getAllTasks();

  return allTasks;
};

const createTask = async (tarefa, status) => {
  // const {  tarefa ,status } = task
//    const t = await addTask(task)
  if (!tarefa || !status) return { message: 'Task and Status are required.' };

  const taskId = await addTask({ tarefa, status });

  return {
    id: taskId,
    tarefa,
    status,
  };
};

const getTaskId = async (id) => {
  const TaskId = await getTaskById(id);
  // const validId = ObjectId.isValid(id);
  // console.log(TaskId, 'TaskId service');
  return TaskId;
};

const updateStatus = async (id, task) => {
  const { tarefa, status } = task;
  await updateTask(id, tarefa, status);

  const update = {
    _id: id,
    tarefa,
    status,

  };
  console.log(update, 'updateService');
  return update;
};

const removeTaskSer = async (id) => {
  const removi = await removeTask(id);
  console.log(removi, 'removiService');
  return removi;
};

module.exports = {
  listTasks, createTask, getTaskId, updateStatus, removeTaskSer,
};
