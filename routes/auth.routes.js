const express = require('express');
const router = express.Router();

const { register, login } = require('../controllers/auth.controller');
const authMiddleware = require('../middleware/auth.middleware');

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes
router.get('/profile', authMiddleware, (req, res) => {
    res.json({
        message: 'Protected route',
        user: req.user
    });
});

router.get('/dashboard', authMiddleware, (req, res) => {
    res.json({
        message: 'Welcome to dashboard',
        user: req.user
    });
});

router.get('/settings', authMiddleware, (req, res) => {
    res.json({
        message: 'User settings',
        user: req.user
    });
});

router.delete('/delete-account', authMiddleware, (req, res) => {
    res.json({
        message: 'Account deleted',
        userId: req.user.id
    });
});

module.exports = router;