const express = require('express');
const router = express.Router();
const {authenticateUser} = require('../middleware/authentication')
const {
        createHistory,getAllHistory,getSingleHistory
} = require('../controllers/historyController');

router.get('/getAllHistory',authenticateUser,getAllHistory);
router.get('/:id',authenticateUser,getSingleHistory);

module.exports = router;
