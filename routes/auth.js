// routes/auth.js

const express = require('express');
const router = express.Router();
const { login } = require('../Controller/authController');

// POST login
router.post('/', login);

module.exports = router;
