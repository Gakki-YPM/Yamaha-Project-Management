const express = require('express');
const employeesController = require('../controllers/employees');

const router = express.Router();

router.get('/', employeesController.getAllEmployees); //pega todos os dados de employees do DB browser

router.get('/:id', employeesController.getEmployeeById); //pega as informações da tabela "funcionários" pelo Id 

router.post('/', employeesController.createEmployee); //cria um funcioncionário no banco de dados

router.patch('/:id', employeesController.updateEmployee); //atualiza as informações do funcionário

router.delete('/:id', employeesController.deleteEmployee); //deleta a informação selecionada da tabela "funcionários"

module.exports = router; 