const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config');
const todoRoutes = require('./routes/todos');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/todos', todoRoutes);

// Connect to MongoDB
mongoose.connect(config.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Basic route
app.get('/', (req, res) => {
  res.json({ message: 'MERN Todo API is running!' });
});

// Start server
app.listen(config.PORT, () => {
  console.log(`Server is running on port ${config.PORT}`);
});
