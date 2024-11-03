// models/Attendance.js

let attendanceRecords = [];

const getAttendanceRecords = () => attendanceRecords;

const addAttendanceRecord = (id, status) => {
    const recordIndex = attendanceRecords.findIndex(record => record.id === id);
    if (recordIndex > -1) {
        attendanceRecords[recordIndex].status = status; // Update existing record
    } else {
        attendanceRecords.push({ id, status }); // Add new record
    }
};

module.exports = {
    getAttendanceRecords,
    addAttendanceRecord,
};
