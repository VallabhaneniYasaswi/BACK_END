// routes/timetable.js

const express = require('express');
const router = express.Router();
const { getTimetable } = require('../models/Timetable');

// GET timetable
router.get('/', (req, res) => {
    res.json(getTimetable());
});

module.exports = router;
