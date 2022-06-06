const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const dbPath = './database/yamaha.db';
const db = new sqlite3.Database(dbPath);
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const getAllEmployees = (req, res) =>{
    const sql = 'SELECT * FROM Funcionario';
    db.all(sql, [], (err, rows) =>{
        if(err){
            throw err;
        } else {
            res.json(rows);
        }
    });
}

const getEmployeeById = (req, res) =>{
    const { id } = req.params;
    const sql = `SELECT * FROM Funcionario WHERE FuncionarioID = ${id}`;
    db.get(sql, [], (err, row) =>{
        if(err){
            throw err;
        } else {
            res.json(row);
        }
    });
}

const createEmployee = (req, res) =>{
    const firstName = req.body.Nome;
    const lastName = req.body.Sobrenome;
    const employeeYamaha = req.body.FuncionarioYamaha;
    const register = req.body.Registro;
    const company = req.body.Empresa; // criar e deixar aceitar null
    const durationContract = req.body.Duracaocontrato;//mesma coisa que o de cima. temos que ver
    const hoursProject = req.body.Horasdisponiveis;

    const sql = 'INSERT INTO Funcionario (Nome, Sobrenome, FuncionarioYamaha, Registro, Funcao, Empresa, DuracaoContrato, HorasProjetos) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
    db.run(sql, [firstName, lastName, employeeYamaha, register, company, durationContract, hoursProject], (err) =>{
        if(err){
            throw err;
        } else {
            res.send('Funcionário cadastrado com sucesso!');
        }
    });
}

const updateEmployee = (req, res) =>{
    const { id } = req.params;

    const firstName = req.body.Nome;
    const lastName = req.body.Sobrenome;
    const employeeYamaha = req.body.FuncionarioYamaha;
    const register = req.body.Registro;
    const city = req.body.Cidade;
    const hoursProject = req.body.HorasProjetos;
    const position = req.body.Cargo;

    const sql = `UPDATE Funcionario SET Nome = ?, Sobrenome = ?, FuncionarioYamaha = ?, Registro = ?, Cidade = ?, HorasProjetos = ?, Cargo = ? WHERE FuncionarioID = ${id}`;
    db.run(sql, [firstName, lastName, employeeYamaha, register, city, hoursProject, position], (err) =>{
        if(err){
            throw err;
        } else {
            res.send('Funcionário atualizado com sucesso!');
        }
    });
}

const deleteEmployee = (req, res) =>{
    const { id } = req.params;

    const sql = `DELETE FROM Funcionario WHERE FuncionarioID = ${id}`;
    db.run(sql, [], (err) =>{
        if(err){
            throw err;
        } else {
            res.send('Funcionário deletado com sucesso!');
        }
    });
}

module.exports = {
    getAllEmployees,
    getEmployeeById,
    createEmployee,
    updateEmployee,
    deleteEmployee
}