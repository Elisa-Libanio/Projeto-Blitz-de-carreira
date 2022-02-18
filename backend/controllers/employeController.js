const { listEmployes, addEmployeService } = require('../services/emplooyeService');

const allEmployControl = async (_req, res, next) => {
  try {
    const allEmplo = await listEmployes();
    res.status(200).json(allEmplo);
  } catch (err) {
    next(err);
  }
};
const addEmployeControl = async (req, res, next) => {
  try {
    const {
      nome, cargo, email, senha,
    } = req.body;
    const create = await addEmployeService(nome, cargo, email, senha);
    console.log(create,"create");
    res.status(200).json(create);
  } catch (err) {
    next(err);
  }
};

module.exports = { allEmployControl, addEmployeControl };
