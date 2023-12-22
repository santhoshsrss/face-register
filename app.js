const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const faceRoutes = require('./routes/faceRoutes');

const app = express();
const PORT = process.env.PORT || 8080;

// Connect to MongoDB (replace 'your_database_url' with your actual MongoDB URL)
mongoose.connect('mongodb://127.0.0.1:27017/face', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());

// Use faceRoutes for handling face-related requests
app.use('/api', faceRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
