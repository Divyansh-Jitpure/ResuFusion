import jwt from "jsonwebtoken";

// Middleware to authenticate user requests using JWT
const authMiddleware = (req, res, next) => {
  // Get the token from cookies
  const token = req.cookies.token;

  // Return Unauthorized error if no token
  if (!token) return res.status(401).json({ error: "Unauthorized!!" });

  // Verify it using the secret key
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: "Invalid token!!" });

    // Attach decoded user data (userId) to request object
    req.user = decoded;

    next();
  });
};

export default authMiddleware;
