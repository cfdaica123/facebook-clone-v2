const jwt = require('jsonwebtoken');

// constants
const { ACCESS_TOKEN_SECRET } = require('../constants/auth');

const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res
      .status(401)
      .json({ success: false, message: 'Access token not found' });
  }

  try {
    const decoded = jwt.verify(token, ACCESS_TOKEN_SECRET);

    // Attach userId to request
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.log('error', error);
    res.status(403).json({ success: false, message: 'Invalid token' });
  }
};

module.exports = verifyToken;
