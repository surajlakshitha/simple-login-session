var express = require('express');
var router = express.Router();
const credentials = {
    email : "admin@gmail.com",
    password : "admin123"
}

//login user 
router.post('/login',(req, res) => {
    if(req.body.email == credentials.email && req.body.password == credentials.password){
        req.session.user = req.body.email;
        //res.redirect('/dashboard')
        res.end("Login Successful..!");
    }else{
        res.end("Login Failed..!");
    }
});

module.exports = router;