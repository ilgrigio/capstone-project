const express = require('express');
const login = express.Router();
const userModel = require('../models/users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const rateLimit = require('express-rate-limit');

// Rate Limit
const loginLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minuto
  max: 5, // Massimo 5 richieste per minuto
  message: 'Too many requests, please try again later.',
});

// Login POST
login.post('/login', loginLimiter, async (req, res) => {
  try {
    const user = await userModel.findOne({
      email: req.body.email,
    });
    if (!user) {
      res.status(404).send({
        statusCode: 404,
        message: 'User does not exists',
      });
    }
    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordValid) {
      res.status(401).send({
        statusCode: 401,
        message: 'Password is not valid',
      });
    }
    const token = jwt.sign(
      {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: '24h',
      }
    );
    res.header('authorization', token).status(200).send({
      message: 'Login successful',
      statusCode: 200,
      token,
    });
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: 'Internal server error' + error,
    });
  }
});

module.exports = login;
