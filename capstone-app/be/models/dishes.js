const mongoose = require('mongoose');

const DishSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      enum: ['antipasti', 'primi', 'secondi', 'dolci', 'drink'],
      required: true,
      default: 'antipasti',
    },
    price: {
      type: mongoose.Types.Decimal128,
      required: true,
      default: 0.0,
    },
    addedIngredients: {
      type: String,
      required: false,
      default: 'Nessun ingrediente aggiuntivo',
    },
    photo: {
      type: String,
      required: true,
      default: 'https://picsum.photos/200',
    },
  },
  {
    timestamps: true,
    strict: true,
  }
);
// Stringa che identifichi lo schema come modello, nome dello schema,
// nome della collection sul DB
module.exports = mongoose.model('dishModel', DishSchema, 'dishes');
