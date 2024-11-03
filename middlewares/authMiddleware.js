// middlewares/authMiddleware.js

const jwt = require('jsonwebtoken');
const config = require('../config/dbConfig');

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Get token from the Authorization header

    if (!token) return res.sendStatus(401); // No token, unauthorized

    jwt.verify(token, config.jwtSecret, (err, user) => {
        if (err) return res.sendStatus(403); // Token is no longer valid
        req.user = user; // Save user info for use in other routes
        next(); // Proceed to the next middleware or route
    });
};

module.exports = { authenticateToken };
