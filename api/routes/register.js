var express = require('express'); 
var router = express.Router(); 
//import User from('../../models/User');
const { check } = require('express-validator');
const User = require('../../models/User');
const {validationResult } = require('express-validator');


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
    const {email,password,password2} = req.body ; 
    let user = await User.findOne({email});
    if (user) {
        return res.status(400).json({errors:[{msg:'User already exist'}]})
    }
    User.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        password2:req.body.password2
    });
res.send('Register route');
});

module.exports = router ; 