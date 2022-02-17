const connection = require('../connection/connection');
const { ObjectId } = require("mongodb");

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

//  const getTaskById = async (id) => {
//    const db = await connection();
//    db.collection('tasks').findOne({ _id: ObjectId(id) });
//    console.log(task, 'task models by id')
//    return  id;
//   };
  const getTaskById = async (id) => {
    const task = await connection()
    .then((db) => db.collection('tasks').findOne({ _id: ObjectId(id) }));
    console.log(task, 'models')
    return task;
  };
 
  // const updateTask = async (id, tarefa, status) => {
  //   //teria que passar na vdd o id, para atualizar o status
  //   const upTask = await connection()
  //   .then((db) => db.collection('tasks').updateOne({ _id: ObjectId(id) } ,
  //  { $set: {
  //   tarefa,
  //   status,
  //  }} ));
  //   return upTask;
  // };
  
 
  // const updateRecipe = async (id, name, ingredients, preparation) => {
  //   const conn = await mongoConnection();
  //   await conn.collection('recipes').updateOne({ _id: ObjectId(id) }, {
  //     $set: {
  //       name,
  //      ingredients,
  //      preparation,
  //      },
  //   });
  // };

module.exports = { getAllTasks, addTask, getTaskById }
