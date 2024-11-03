// models/Timetable.js

const timetable = {
    '09:00 - 10:00': {
        Monday: { subject: 'Mathematics', room: '101' },
        Tuesday: { subject: 'Leisure', room: '-' },
        Wednesday: { subject: 'Mathematics', room: '101' },
        Thursday: { subject: 'Leisure', room: '-' },
        Friday: { subject: 'Mathematics', room: '101' },
        Saturday: { subject: 'Mathematics', room: '101' },
    },
    '10:00 - 11:00': {
        Monday: { subject: 'Physics', room: '102' },
        Tuesday: { subject: 'Mathematics', room: '101' },
        Wednesday: { subject: 'Leisure', room: '-' },
        Thursday: { subject: 'Mathematics', room: '101' },
        Friday: { subject: 'Leisure', room: '-' },
        Saturday: { subject: 'Physics', room: '102' },
    },
    '11:00 - 12:00': {
        Monday: { subject: 'Leisure', room: '-' },
        Tuesday: { subject: 'Physics', room: '102' },
        Wednesday: { subject: 'Physics', room: '102' },
        Thursday: { subject: 'Physics', room: '102' },
        Friday: { subject: 'Physics', room: '102' },
        Saturday: { subject: 'Leisure', room: '-' },
    },
    '12:00 - 01:00': {
        Monday: { subject: 'Chemistry', room: '103' },
        Tuesday: { subject: 'Chemistry', room: '103' },
        Wednesday: { subject: 'Chemistry', room: '103' },
        Thursday: { subject: 'Chemistry', room: '103' },
        Friday: { subject: 'Chemistry', room: '103' },
        Saturday: { subject: 'Chemistry', room: '103' },
    },
    '01:00 - 02:00': {
        Monday: { subject: 'Biology', room: '104' },
        Tuesday: { subject: 'Biology', room: '104' },
        Wednesday: { subject: 'Biology', room: '104' },
        Thursday: { subject: 'Biology', room: '104' },
        Friday: { subject: 'Biology', room: '104' },
        Saturday: { subject: 'Biology', room: '104' },
    },
    '02:00 - 03:00': {
        Monday: { subject: 'Computer Science', room: '105' },
        Tuesday: { subject: 'Computer Science', room: '105' },
        Wednesday: { subject: 'Computer Science', room: '105' },
        Thursday: { subject: 'Computer Science', room: '105' },
        Friday: { subject: 'Computer Science', room: '105' },
        Saturday: { subject: 'Computer Science', room: '105' },
    },
};

const getTimetable = () => timetable;

module.exports = {
    getTimetable,
};
