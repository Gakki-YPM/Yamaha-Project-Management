const express = require('express');
const sqlite3 = require('sqlite3').verbose(); 
const bodyParser = require('body-parser');

const dbPath = './database/yamaha.db'
const db = new sqlite3.Database(dbPath);
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const getAllRole = (req, res) =>{ 
    const sql = 'SELECT * FROM Funcao ';
    db.all(sql, [], (err, rows) =>{
        if(err){
            throw err;
        } else {
            res.json(rows);
        }
    });
}

const getRoleById = (req, res) =>{
    const { id } = req.params;
    const sql = `SELECT * FROM Funcao WHERE FuncaoID = ${id}`;
    db.get(sql, [], (err, row) =>{
        if(err){
            throw err;
        } else {
            res.json(row);
        }
    });
}

const createRole = (req, res) =>{
    const title = req.body.functitulo;
    const area = req.body.funcarea;

    const sql = `INSERT INTO Funcao (Titulo, Area) VALUES (?, ?)`;

    db.run(sql, [title, area], (err) =>{
        if(err){
            throw err;
        } else {
            res.render('novo');
        }
    });
}

const updateRole = (req, res) =>{
    const { id } = req.params;

    const title = req.body.Titulo;
    const area = req.body.Area;
    const governance = req.body.Governanca;


    const sql = `UPDATE Funcao SET Titulo = ?, Area = ?, Governanca = ? WHERE FuncaoID = ${id}`;

    db.run(sql, [title, area, governance], (err) =>{
        if(err){
            throw err;
        } else {
            res.send('Funcão atualizado com sucesso!');
        }
    });
}

const deleteRole = (req, res) =>{
    const { id } = req.params;
    const sql = `DELETE FROM Funcao WHERE FuncaoID = ${id}`;
    db.run(sql, [], (err) =>{
        if(err){
            throw err;
        } else {
            res.send('Funcão deletado com sucesso!');
        }
    });
}

module.exports = {
    getAllRole,
    getRoleById,
    createRole,
    updateRole,
    deleteRole
}