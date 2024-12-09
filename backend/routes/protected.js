const express = require('express');
const { authenticateToken, authorizeRoles } = require('../middlewares/auth');
const router = express.Router();

router.get('/admin', authenticateToken, authorizeRoles('admin', 'super-admin'), (req, res) => {
    res.send('Admin content');
});

router.get('/super-admin', authenticateToken, authorizeRoles('super-admin'), (req, res) => {
    res.send('Super Admin content');
});

module.exports = router;
