const express = require('express');
const app = express();
const PORT = 3000;

const hostname = '127.0.0.1';
const sqlite3 = require('sqlite3').verbose();
const DBPATH = './database/yamaha.db';
const bodyParser = require('body-parser');

const projectsRoutes = require('./routes/projects');
const employeesRoutes = require('./routes/employees');
const governanceRoutes = require('./routes/governance');
const roleRoutes = require('./routes/role');
//const path = require('path');


//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');

app.use(express.static('../frontend'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.get('/', (req, res) =>{
//      res.render('index');
//  });

app.use('/projects', projectsRoutes);
app.use('/employees', employeesRoutes);
app.use('/governance', governanceRoutes);
app.use('/role', roleRoutes);

app.listen(PORT, hostname, () =>{
    console.log(`Server is running on port ${PORT}`);
});