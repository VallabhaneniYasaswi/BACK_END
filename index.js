// index.js

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const attendanceRoutes = require('./routes/AttendanceRoutes');
const facultyRoutes = require('./routes/FacultyRoutes');
const studentRoutes = require('./routes/StudentRoutes');
const timetableRoutes = require('./routes/TimetableRoutes');
const courseRoutes = require('./routes/CourseRoutes');
const authRoutes = require('./routes/auth'); // Import auth route

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Use attendance, faculty, student, timetable, and auth routes
app.use('/api/attendance', attendanceRoutes);
app.use('/api/faculty', facultyRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/timetable', timetableRoutes);
app.use('/api/courses', courseRoutes); // Add course route
app.use('/api/login', authRoutes); // Add auth route

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
