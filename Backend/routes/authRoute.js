const express = require('express');
const router = express.Router();

const {
        register,
        login,
        socialLogin,
        logout,
} = require('../controllers/authController');

router.post('/register',register);
router.post('/login',login);
router.post('/social-login', socialLogin);
router.get('/logout',logout);

module.exports = router;
