const { getAllTasks, addTask, getTaskById } = require('../models/tasks');


const listTasks = async () => {
    const allTasks = await getAllTasks();

    return allTasks;

}

const createTask = async (tarefa, status) => {
    // const {  tarefa ,status } = task
//    const t = await addTask(task)
  if (!tarefa || !status) return  { message: 'Task and Status are required.' };

    const taskId = await addTask({ tarefa,status });
 
   return {
     id: taskId,
     tarefa,
     status,
   };
};

const getTaskId = async (id) => {
    const TaskId = await getTaskById(id);
    // const validId = ObjectId.isValid(id);
    console.log(TaskId, 'TaskId service' )
    return TaskId;
};

// const updateStatus = async (id, task ) => {
//     // const { tarefa , status } = task
//     const update = await updateTask(id, task)
//     return update;    
// };

// const returnUpdateRecipe = async (id, receita, token) => {
//     const { name, ingredients, preparation } = receita;
//     if (!token) throw errorMessage(401, 'missing auth token');
//     const email = await verifyToken(token);
//     console.log(email);
//     if (!email) throw errorMessage(401, 'jwt malformed');
//     await updateRecipe(id, name, ingredients, preparation);
//     const { _id: userId } = await findEmail(email);

//     const recipeUp = { 
//         _id: id, 
//         name, 
//         ingredients, 
//         preparation,
//         userId,
        
//     };
//     // falta fazer a autenticação e acho que ajeitar o formato do recipe.
//     return recipeUp;
//   };


module.exports = { listTasks ,createTask, getTaskId };
