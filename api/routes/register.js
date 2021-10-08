var express = require('express'); 
var router = express.Router(); 
const { check } = require('express-validator');
const User = require('../../models/User');
const {validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const config = require('config');
const jwt = require('jsonwebtoken');
const jwtSecret = "mysecretToken" ;


// post /register
//description register users 
// public 
router.post('/',[
    check('name','Please enter your name').not().isEmpty(),
    check('email','Please enter a valid mail').isEmail(),
    check('password', 'The password must be 6+ chars long and contain a number').isLength({ min: 6 }),
    check('password2', 'The password must be 6+ chars long and contain a number').isLength({ min: 6 })
]
,
async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {name,email,password,password2} = req.body ; 
    let user = await User.findOne({email});
    if (user) {
        return res.status(400).json({errors:[{msg:'User already exist'}]})
    }
    // compare password 
     if (password !== password2){
         return res.status(400).json({errors:[{msg:'password do not match'}]})
     }

    // crypt password & create user to database 

    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, async (err, hash) =>  {
            const user = new User({
                name,
                email,
                password:hash,
                password2:hash
            });
            console.log('the id is '+user.id);
           try {
            await user.save();
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
            console.log(hash);
        });
    });
     
  
  
//res.send('Register route');
});

module.exports = router ; 