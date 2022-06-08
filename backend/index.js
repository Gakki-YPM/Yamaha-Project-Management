const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

const projectsRoutes = require('./routes/projects');
const employeesRoutes = require('./routes/employees');
const governanceRoutes = require('./routes/governance');
const roleRoutes = require('./routes/role');

app.use(express.static('../frontend'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/projects', projectsRoutes);
app.use('/employees', employeesRoutes);
app.use('/governance', governanceRoutes);
app.use('/role', roleRoutes);

app.listen(PORT, () =>{
    console.log(`Server is running on port localhost:${PORT}`);
});