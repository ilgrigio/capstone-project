const express = require('express');
const userRoute = express.Router();
const userModel = require('../models/users');
const bcrypt = require('bcrypt');

// GET
userRoute.get('/users', async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: 'Internal server error',
    });
  }
});

// POST
userRoute.post('/addUser', async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  const newUser = new userModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: hashedPassword,
    email: req.body.email,
    age: Number(req.body.age),
  });
  try {
    const userToSave = await newUser.save();
    res.status(201).send({
      statusCode: 201,
      payload: userToSave,
    });
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: 'Internal server error',
    });
  }
});

// DELETE
userRoute.delete('/deleteUser/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.findByIdAndDelete(id);
    if (!user) {
      res.status(404).send({
        statusCode: 404,
        message: "The requested user doesn't exist",
      });
    }

    res.status(200).send({
      statusCode: 200,
      message: `User with id ${id} successfully remove`,
    });
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: 'Internal server error',
    });
  }
});
module.exports = userRoute;
