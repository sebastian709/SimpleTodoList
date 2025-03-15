const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api.routes');
require('dotenv').config();

const app = express();

require('./config/db');

app.use(cors());
app.use(
  express.urlencoded({extended: true})
);

app.use(express.json());
app.use('/api', apiRoutes);


const port = process.env.PORT || 5000;

app.listen(port, () =>{
  console.log(`Server is running in port ${port}`);
})