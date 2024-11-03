// routes/CourseRoutes.js

const express = require('express');
const router = express.Router();
const { getCourses, addCourse } = require('../models/Courses');

// GET all courses
router.get('/', (req, res) => {
    res.json(getCourses());
});

// POST a new course
router.post('/', (req, res) => {
    const newCourse = req.body;
    addCourse(newCourse);
    res.status(201).json(newCourse);
});

module.exports = router;
