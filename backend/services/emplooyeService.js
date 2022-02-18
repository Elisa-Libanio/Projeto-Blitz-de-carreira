const { getAllEmployes, addEmploye } = require('../models/emplooye');

const listEmployes = async () => {
  const all = await getAllEmployes();
  return all;
};

const addEmployeService = async (nome, cargo, email, senha) => {
  // verificar como inserir id, seria insertedId?
  const add = await addEmploye(nome, cargo, email, senha);
  console.log(add, 'addService');
  return add;
};

module.exports = {
  listEmployes,
  addEmployeService,
};
