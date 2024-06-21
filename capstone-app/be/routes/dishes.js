const express = require('express');
const dishModel = require('../models/dishes');
const dishRoute = express.Router();
const rateLimit = require('express-rate-limit');

// Rate Limit
const loginLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minuto
  max: 5, // Massimo 5 richieste per minuto
  message: 'Too many requests, please try again later.',
});

// GET
dishRoute.get('/dishes', loginLimiter, async (req, res) => {
  const { page = 1, pageSize = 10 } = req.query;
  try {
    const dishes = await dishModel
      .find()
      .limit(pageSize)
      .skip((page - 1) * pageSize)
      .sort({ category: -1 });

    const totalDishes = await dishModel.countDocuments();

    res.status(200).send({
      currentPage: page,
      pageSize,
      totalPages: Math.ceil(totalDishes / pageSize),
      dishes,
    });
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: 'Internal server error',
    });
  }
});

// GET CATEGORY
// ANTIPASTI
dishRoute.get('/dishes/antipasti', loginLimiter, async (req, res) => {
  const antipasti = await dishModel.find({ category: 'antipasti' });
  res.status(200).send({
    statusCode: 200,
    category: antipasti,
  });
});

// PRIMI
dishRoute.get('/dishes/primi', loginLimiter, async (req, res) => {
  const primi = await dishModel.find({ category: 'primi' });
  res.status(200).send({
    statusCode: 200,
    category: primi,
  });
});

// SECONDI
dishRoute.get('/dishes/secondi', loginLimiter, async (req, res) => {
  const secondi = await dishModel.find({ category: 'secondi' });
  res.status(200).send({
    statusCode: 200,
    category: secondi,
  });
});

// DESSERT
dishRoute.get('/dishes/dessert', loginLimiter, async (req, res) => {
  const dessert = await dishModel.find({ category: 'dessert' });
  res.status(200).send({
    statusCode: 200,
    category: dessert,
  });
});

// DRINK
dishRoute.get('/dishes/drink', loginLimiter, async (req, res) => {
  const drink = await dishModel.find({ category: 'drink' });
  res.status(200).send({
    statusCode: 200,
    category: drink,
  });
});
/* ----- FINISH CATEGORY ----- */

// POST
dishRoute.post('/addDish', loginLimiter, async (req, res) => {
  const newDish = new dishModel({
    name: req.body.name,
    description: req.body.description,
    category: req.body.category,
    price: Number(req.body.price),
    addedIngredients: req.body.addedIngredients,
    photo: req.body.photo,
  });
  console.log(req.body);

  try {
    const dishToSave = await newDish.save();

    res.status(201).send({
      statusCode: 201,
      payload: dishToSave,
    });
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: 'Errore interno server',
    });
  }
});

module.exports = dishRoute;
