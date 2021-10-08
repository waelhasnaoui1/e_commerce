var express = require('express'); 
var router = express.Router();
const User = require('../../models/User');
const { check } = require('express-validator');
const {validationResult} = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtSecret = "mysecretToken" ;
//route get /login 
// description : login 
// route 
router.get('/',(req,res)=> {
    res.send('Login route'); 
});

// post /login
//description login users 
// public 

router.post('/',[
    
    check('email','Please enter a valid mail').isEmail(),
    check('password', 'The password must be 6+ chars long and contain a number').isLength({ min: 6 })
    
]
,
async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {email,password} = req.body ; 
    //compare password 
    
 

    //get hash password 

    let user = await User.findOne({email});
    hash = user.password ; 
    // const test = bcrypt.compareSync(password, hash); 
    // console.log('the test is'+ test);
    // compare password 
  
    if (bcrypt.compareSync(password, hash)){
        try {
           console.log('here');
            payload = {
               user:{
                   id:user.id
               } 
            };
            jwt.sign(payload,
                jwtSecret,
                {expiresIn:36000},
                (err,token)=>{
                    if (err) throw err ; 
                    res.json({token}); 
                    console.log('token us'+token);
            });
            
           } catch (err) {
               console.error(err.message);
           }
    }else{
        return res.status(400).json({msg:'Please verify your e-mail or password'});
    }


    // crypt password & create user to database 

    
//res.send('Register route');
});

module.exports = router ; 