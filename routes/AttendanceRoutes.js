// routes/attendance.js

const express = require('express');
const router = express.Router();
const { getAttendanceRecords, addAttendanceRecord } = require('../models/Attendance');

// GET attendance records
router.get('/', (req, res) => {
    res.json(getAttendanceRecords());
});

// POST attendance record
router.post('/', (req, res) => {
    const { id, status } = req.body;
    addAttendanceRecord(id, status);
    res.status(201).send({ message: 'Attendance recorded successfully' });
});

module.exports = router;
