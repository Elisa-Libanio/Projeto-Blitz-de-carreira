const { ObjectId } = require('mongodb');
const connection = require('../connection/connection');

const getAllTasks = async () => {
  const db = await connection();
  const task = await db.collection('tasks').find().toArray();
  return task;
};

const addTask = async ({ tarefa, status }) => {
  const db = await connection();
  const { insertedId } = await db.collection('tasks').insertOne({ tarefa, status });

  return insertedId;
};

const getTaskById = async (id) => {
  const task = await connection()
    .then((db) => db.collection('tasks').findOne({ _id: ObjectId(id) }));
  // console.log(task, 'models');
  return task;
};

const updateTask = async (id, tarefa, status) => {
  // teria que passar na vdd o id, para atualizar o status
  const upTask = await connection()
    .then((db) => db.collection('tasks').updateOne(
      { _id: ObjectId(id) },
      {
        $set: {
          tarefa,
          status,
        },
      },
    ));
  console.log(upTask, 'uptaskModels');
  return upTask;
};

const removeTask = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }
  const db = await connection();
  const removTask = await db.collection('tasks').findOne(ObjectId(id));
  await db.collection('tasks').deleteOne(
    { _id: ObjectId(id) },
  );
  console.log(removTask, 'models');
  return removTask;
};

module.exports = {
  getAllTasks, addTask, getTaskById, updateTask, removeTask,
};
