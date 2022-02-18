// const { ObjectId } = require('mongodb');
const connection = require('../connection/connection');

const getAllEmployes = async () => {
  const db = await connection();
  const allEmplo = await db.collection('employees').find().toArray();
  return allEmplo;
};

const addEmploye = async (nome, cargo, email, senha) => {
  const db = await connection();
  //verificar sobre a senha aqui.
  const { insertedId } = await db.collection('employees').insertOne({
    nome,
    cargo,
    email,
    senha,
  });
   console.log(insertedId, "insertedIdModel")
  return { nome, cargo, email, _id: insertedId };
};

module.exports = { getAllEmployes, addEmploye };
