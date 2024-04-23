const express = require('express');
const dishModel = require('../models/dishes');
const dishes = require('../models/dishes');
const dishRoute = express.Router();

// GET
dishRoute.get('/dishes', async (req, res) => {
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
dishRoute.get('/dishes/antipasti', async (req, res) => {
  const antipasti = await dishModel.find({ category: 'antipasti' });
  res.status(200).send({
    statusCode: 200,
    category: antipasti,
  });
});

// PRIMI
dishRoute.get('/dishes/primi', async (req, res) => {
  const primi = await dishModel.find({ category: 'primi' });
  res.status(200).send({
    statusCode: 200,
    category: primi,
  });
});

// SECONDI
dishRoute.get('/dishes/secondi', async (req, res) => {
  const secondi = await dishModel.find({ category: 'secondi' });
  res.status(200).send({
    statusCode: 200,
    category: secondi,
  });
});

// DESSERT
dishRoute.get('/dishes/dessert', async (req, res) => {
  const dessert = await dishModel.find({ category: 'dessert' });
  res.status(200).send({
    statusCode: 200,
    category: dessert,
  });
});

// DRINK
dishRoute.get('/dishes/drink', async (req, res) => {
  const drink = await dishModel.find({ category: 'drink' });
  res.status(200).send({
    statusCode: 200,
    category: drink,
  });
});
/* ----- FINISH CATEGORY ----- */

// POST
dishRoute.post('/addDish', async (req, res) => {
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
