var express = require('express'); 
var router = express.Router();


//route get /login 
// description : login 
// route 
router.get('/',(req,res)=> {
    res.send('Login route'); 
});

module.exports = router ; 