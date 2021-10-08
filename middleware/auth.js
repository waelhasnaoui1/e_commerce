const jwt = require('jsonwebtoken'); 
const jwtSecret = "mysecretToken" ;

module.exports = (req,req,next) => {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(400).json({
            msg : 'No token authorization denied'
        });
    }
    try {
        const decoded = jwt.verify(token,jwtSecret);
        req.user = decoded ; 
        next();
    } catch (err) {
        console.error(err.message);
    }
    const decoded = jwt.verify(token,jwtSecret);

}
