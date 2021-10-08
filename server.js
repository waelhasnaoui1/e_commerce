const express = require('express');
const connectDB = require('./db.js')
const app = express (); 

const port = 5000; 


// connecet to database 

connectDB (); 

//init middleware 
app.use(express.json({extanded:false}));

// routes 
 
app.use('/login',require('./api/routes/login'));
app.use('/register',require('./api/routes/register'));

// app.get('/',(req,res)=>{
//     res.send('hello world'); 
// });


app.listen(port,()=>{
    console.log(`App running on Port${port}`);
});
