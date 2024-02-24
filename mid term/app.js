// app.js

const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const any = express();

// Connect to the database
mongoose.connect(process.env.DB_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to the database'))
  .catch(err => console.error('Error connecting to the database:', err));

// Other configurations and middleware

module.exports = app;


// app.js

const express = require('express');
const app = express();

// Other required imports and configurations

const studentsRouter = require('./routes/students');
app.use('/students', studentsRouter);

// Other routes and middleware configurations

module.exports = app;
