const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const DBPATH = './database/yamaha.db';
const db = new sqlite3.Database(DBPATH);

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const getAllGovernance = (req, res) =>{
    const sql = 'SELECT * FROM Governanca';
    db.all(sql, [], (err, rows) =>{
        if(err){
            throw err;
        } else {
            res.json(rows);
        }
    });
}

module.exports = {
    getAllGovernance
}