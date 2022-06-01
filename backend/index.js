const express = require('express');
const bodyParser = require('body-parser');
const projectsRoutes = require('./routes/projects');
const employeesRoutes = require('./routes/employees');
const governanceRoutes = require('./routes/governance');
const roleRoutes = require('./routes/role');
//const path = require('path');

const app = express();
const PORT = 3000;

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

// app.get('/', (req, res) =>{
//     res.render('index');
// });

app.use(express.static('../frontend'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/projects', projectsRoutes);
app.use('/employees', employeesRoutes);
app.use('/governance', governanceRoutes);
//app.use('/role', roleRoutes);

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});