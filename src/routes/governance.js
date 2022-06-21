const express = require('express');
const governanceController = require('../controllers/governance');

const router = express.Router();

router.get('/', governanceController.getAllGovernance); //pega todos os dados da tabela "governança"

router.get('/:id', governanceController.getGovernanceById); //pega os dados da tabela "governança" pelo Id

router.post('/', governanceController.createGovernance); //cria uma nova governança na tabela

router.patch('/:id', governanceController.updateGovernance); //atualiza as informações da tabela "governança"

router.delete('/:id', governanceController.deleteGovernance); //deleta a informação selecionada na tabela "governança"

module.exports = router;