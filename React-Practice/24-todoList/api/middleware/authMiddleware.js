const jwt = require('jsonwebtoken');
const User = require('../model/userSchema.js')

exports.protect = async (req, res, next) => {
    try {
        const token = req.cookies.token; // Assuming the token is sent in a cookie named 'token'
        if (!token) {
            return res.status(401).json({ message: 'You are not logged in! Please log in to get access.' });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // Find the user by ID and exclude the password field
        const currentUser = await User.findById(decoded.id).select('-password');
        if (!currentUser) {
            return res.status(401).json({ message: 'The user belonging to this token does no longer exist.' });
        }
        req.user = currentUser; // Attach the user to the request object so we can use later with todo as ref of user
        //we can access by req.user.id, req.user.email and many more

        next(); // Call next() to proceed to the next middleware
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token. Please log in again.' });
    }
}