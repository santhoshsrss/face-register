const express = require('express');
const router = express.Router();
const Face = require('../models/faceModel');

// POST /api/register
router.post('/register', async (req, res) => {
  try {
    const { faceVector } = req.body;
    const newFace = new Face({ faceVector });
    await newFace.save();
    res.status(201).json({ message: 'Face registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// GET /api/faces
router.get('/faces', async (req, res) => {
  try {
    const faces = await Face.find();
    res.status(200).json(faces);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
