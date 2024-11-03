// routes/faculty.js

const express = require('express');
const router = express.Router();
const { getFacultyMembers } = require('../models/Faculty');

// GET faculty members
router.get('/', (req, res) => {
    res.json(getFacultyMembers());
});

module.exports = router;
