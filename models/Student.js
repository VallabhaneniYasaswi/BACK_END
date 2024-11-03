// models/Student.js

const students = [
    { id: 'S001', name: 'Alice Johnson', department: 'Computer Science', clusterNumber: 1, phone: '111-222-3333', email: 'alice.johnson@example.com' },
    { id: 'S002', name: 'Bob Smith', department: 'Mathematics', clusterNumber: 2, phone: '222-333-4444', email: 'bob.smith@example.com' },
    { id: 'S003', name: 'Cathy Brown', department: 'Physics', clusterNumber: 3, phone: '333-444-5555', email: 'cathy.brown@example.com' },
    { id: 'S004', name: 'David Wilson', department: 'Chemistry', clusterNumber: 4, phone: '444-555-6666', email: 'david.wilson@example.com' },
    { id: 'S005', name: 'Eva White', department: 'Biology', clusterNumber: 5, phone: '555-666-7777', email: 'eva.white@example.com' },
];

const getStudents = () => students;

module.exports = {
    getStudents,
};
