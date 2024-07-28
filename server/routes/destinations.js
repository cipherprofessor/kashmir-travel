// server/routes/destinations.js
const express = require('express');
const router = express.Router();
const Destination = require('../models/Destination');

// GET all destinations
router.get('/', async (req, res) => {
  try {
    const destinations = await Destination.find();
    res.json(destinations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET destination by ID
router.get('/:id', async (req, res) => {
  try {
    const destination = await Destination.findById(req.params.id);
    if (!destination) return res.status(404).json({ message: 'Destination not found' });
    res.json(destination);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new destination
router.post('/', async (req, res) => {
  const destination = new Destination({
    name: req.body.name,
    description: req.body.description,
    image: req.body.image,
    price: req.body.price,
  });

  try {
    const newDestination = await destination.save();
    res.status(201).json(newDestination);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a destination
router.delete('/:id', async (req, res) => {
  try {
    const result = await Destination.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).json({ message: 'Destination not found' });
    res.json({ message: 'Destination deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
