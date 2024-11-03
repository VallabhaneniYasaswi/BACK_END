// models/User.js

const bcrypt = require('bcryptjs');

let users = []; // This will serve as our "database"

// Function to create a new user
const createUser = (email, password) => {
    const hashedPassword = bcrypt.hashSync(password, 8); // Hash the password
    const newUser = { email, password: hashedPassword };
    users.push(newUser);
    return newUser;
};

// Function to find a user by email
const findUser = (email) => {
    return users.find(user => user.email === email);
};

module.exports = { createUser, findUser };
