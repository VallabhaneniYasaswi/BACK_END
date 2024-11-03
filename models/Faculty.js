// models/Faculty.js

const facultyMembers = [
    { id: 'F001', name: 'Dr. Muralimohan', department: 'Computer Science', cabinNumber: 'C101', phone: '123-456-7890', email: 'muralimohan@example.com' },
    { id: 'F002', name: 'DR.s. Kavitha', department: 'Mathematics', cabinNumber: 'C102', phone: '234-567-8901', email: 'kavithae@example.com' },
    { id: 'F003', name: 'Dr. Suresh reddy', department: 'Physics', cabinNumber: 'C103', phone: '345-678-9012', email: 'suresh@example.com' },
    { id: 'F004', name: 'Dr. Ashok', department: 'Chemistry', cabinNumber: 'C104', phone: '456-789-0123', email: 'ashok@example.com' },
    { id: 'F005', name: 'Dr. Ramesh', department: 'Biology', cabinNumber: 'C105', phone: '567-890-1234', email: 'ramesh@example.com' },
];

const getFacultyMembers = () => facultyMembers;

module.exports = {
    getFacultyMembers,
};