// controllers/authController.js

const jwt = require('jsonwebtoken');
const { findUser } = require('../models/User');
const config = require('../config/db');

const login = (req, res) => {
    const { email, password } = req.body;
    const user = findUser(email);

    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate a token
    const token = jwt.sign({ email: user.email }, config.jwtSecret, { expiresIn: '1h' });

    res.json({ message: 'Login successful', token });
};

module.exports = { login };
