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
    const hoursProject = req.body.HorasProjetos;
    const governnaceID = req.body.GovernnacaID;
    const functionID = req.body.FuncaoID;

    const sql = 'INSERT INTO Funcionario (Nome, Sobrenome, FuncionarioYamaha, Registro, HorasProjetos, GovernancaID, FuncaoID) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.run(sql, [firstName, lastName, employeeYamaha, register, hoursProject, governnaceID, functionID], (err) =>{
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
    const hoursProject = req.body.HorasProjetos;
    const position = req.body.Funcao;
    const employeesID = req.body.FuncionarioID;
    const governnaceID = req.body.GovernnacaID;
    const functionID = req.body.FuncaoID;

    const sql = `UPDATE Funcionario SET Nome = ?, Sobrenome = ?, FuncionarioYamaha = ?, Registro = ?, HorasProjetos = ?, FuncionarioID = ?, GovernancaID = ?, FuncaoID = ?, WHERE FuncionarioID = ${id}`;
    db.run(sql, [firstName, lastName, employeeYamaha, register, hoursProject, position, employeesID, governnaceID, functionID], (err) =>{
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