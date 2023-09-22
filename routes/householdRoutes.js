const express = require('express')
const Household = require('../Models/Household')
const router = express.Router()

// Create a new household
router.post('/', async (req, res) => {
  const newHousehold = new Household(req.body)
  try {
    const household = await newHousehold.save()
    res.status(201).json(household)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Get all households
router.get('/', async (req, res) => {
  try {
    const households = await Household.find()
    res.json(households)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Update a household
router.patch('/:id', async (req, res) => {
  try {
    const updatedHousehold = await Household.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    res.json(updatedHousehold)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

// Delete a household
router.delete('/:id', async (req, res) => {
  try {
    await Household.findByIdAndDelete(req.params.id)
    res.json({ message: 'Household deleted successfully' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

module.exports = router
