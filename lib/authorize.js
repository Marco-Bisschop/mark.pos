// Import the necessary modules
const jwt = require('jsonwebtoken');
const fs = require('fs');

// Export the middleware function
// Read the secret and public keys from files
const privateKey = fs.readFileSync('./tokens/private.key');
const publicKey = fs.readFileSync('./tokens/public.key');

// Define the middleware function
const authorize = (req, res, next) => {
    // Get the bearer token from the request headers
    const bearerToken = req.headers.authorization;

    // Check if the bearer token exists
    if (bearerToken) {
        try {
            // Extract the token from the bearer token string
            const token = bearerToken.split(' ')[1];

            // Verify the token using the public key
            const decoded = jwt.verify(token, publicKey, { algorithms: ['RS256'] });

            // Attach the decoded token to the request object
            req.user = decoded;

            
        } catch (error) {
            // Return an error response if the token is invalid
            res.status(401).json({ error: 'Invalid token' });
        }
    } else {
        // Return an error response if the bearer token is missing
        res.status(401).json({ error: 'Bearer token missing' });
    }
    // Call the next middleware function
    next();
};

// Export the middleware function
module.exports = authorize;