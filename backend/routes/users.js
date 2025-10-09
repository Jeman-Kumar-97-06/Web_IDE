const express = require('express');
const router  = express.Router();

const {
    loginUser,
    signupUser
}             = require('../controllers/userControllers');

app.post('/login',loginUser);
app.post('/signup',signupUser);

//Import router to the server.js file
module.exports = router;