import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../model/user.js';
import Student from '../model/student.js';

const protect = asyncHandler(async (req, res, next) => {
  let token;

  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select('-password');
      req.student = await Student.findById(decoded.userId).select('-password');
      next();
    } catch (error) {
      res.status(401);
      throw new Error('Not Authorized! Invalid Token');
    }
  } else {
    res.status(401);
    throw new Error(' Not Authorized! No Token');
  }
});


const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error('Not Authorized!!!  Contact the Admin');
  }
};

export { protect, admin };
