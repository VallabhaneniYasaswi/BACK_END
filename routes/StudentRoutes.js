// routes/student.js

const express = require('express');
const router = express.Router();
const { getStudents } = require('../models/Student');

// GET student members
router.get('/', (req, res) => {
    res.json(getStudents());
});

module.exports = router;
