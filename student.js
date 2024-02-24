// routes/students.js

const express = require('express');
const router = express.Router();

// CREATE route
router.post('/', (req, res) => {
  // Logic to create a new student
});

// READ route
router.get('/', (req, res) => {
  // Logic to retrieve all students from the database and render the view
});

// Update route (if needed)
router.put('/:id', (req, res) => {
  // Logic to update a student record
});

// Delete route (if needed)
router.delete('/:id', (req, res) => {
  // Logic to delete a student record
});

module.exports = router;
