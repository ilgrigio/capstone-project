const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();
const PORT = 9099;
const app = express();

// Import routes
const dishesRoute = require('./routes/dishes');

// Middleware
app.use(express.json());
app.use(cors());
app.use('/', dishesRoute);

mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;

db.on('error', () => console.log('error during db connection'));
db.once('open', () => console.log('connected to db'));

app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT ${PORT}`));
