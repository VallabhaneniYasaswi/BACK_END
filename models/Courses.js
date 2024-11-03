// models/Course.js

const courses = [
    { code: 'CS101', name: 'MSWD', department: 'Computer Science', credits: 3, instructor: 'Dr. Muralimohan' },
    { code: 'MATH101', name: 'PSQT', department: 'Mathematics', credits: 4, instructor: 'DR.s. Kavitha' },
    { code: 'PHY101', name: 'AOOP', department: 'CSE', credits: 4, instructor: 'Dr. Suresh reddy' },
    { code: 'CHEM101', name: 'DBMS', department: 'CSE', credits: 3, instructor: 'Dr. Ashok' },
    { code: 'BIO101', name: 'AIML', department: 'AI', credits: 4, instructor: 'Dr. Ramesh' },
];

const getCourses = () => courses;

const getCourseByCode = (code) => courses.find(course => course.code === code);

const addCourse = (newCourse) => {
    courses.push(newCourse);
};

module.exports = {
    getCourses,
    getCourseByCode,
    addCourse,
};
