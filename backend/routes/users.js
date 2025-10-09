const express = require('express');
const router  = express.Router();

const {
    loginUser,
    signupUser
}             = require('../controllers/userControllers');

app.post('/login',loginUser);
app.post('/signup',signupUser);

module.exports = router;