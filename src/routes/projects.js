const express = require('express');
const projectsController = require('../controllers/projects');

const router = express.Router();

router.get('/', projectsController.getAllProjects); //pega todos os dados da tabela "projetos"

router.get('/:id', projectsController.getProjectById); //pega os dados da tabela "projetos" pelo Id

router.post('/', projectsController.createProject); //cria um novo projeto na tabela "projetos"

router.patch('/:id', projectsController.updateProject); //atualiza as informações na tabela "projetos"

router.delete('/:id', projectsController.deleteProject); //deleta a informação selecionada da tabela "projetos"

module.exports = router;