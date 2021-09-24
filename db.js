const mongoose = require('mongoose');
const config = require('config');
//const db = config.get('mongoURI');
const db = "mongodb+srv://wael:wael@cluster0.uo1px.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const connectDB = async () => {
    try {
        await mongoose.connect(db); 
        console.log('mongo db connected');
    } catch (err) {
        console.error(err.message);
    }
};

module.exports =  connectDB ; 

