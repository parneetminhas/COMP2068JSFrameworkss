// app.js

const express = require('express');
const app = express();

// Other required imports and configurations

const studentsRouter = require('./routes/students');
app.use('/students', studentsRouter);

// Other routes and middleware configurations

module.exports = app;
