const express = require('express')
const Pet = require('../Models/Pets')
const router = express.Router()

// Create a new pet
router.post('/', async (req, res) => {
  const newPet = new Pet(req.body)
  try {
    const pet = await newPet.save()
    res.status(201).json(pet)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Get all pets
router.get('/', async (req, res) => {
  try {
    const pets = await Pet.find()
    res.json(pets)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Update a pet
router.patch('/:id', async (req, res) => {
  try {
    const updatedPet = await Pet.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.json(updatedPet)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Delete a pet
router.delete('/:id', async (req, res) => {
  try {
    await Pet.findByIdAndDelete(req.params.id)
    res.json({ message: 'Pet deleted successfully' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router
