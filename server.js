const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// Importera modeller
const User = require('./Models/User')
const Household = require('./Models/Household')
const Pet = require('./Models/Pet')

const app = express()

app.use(bodyParser.json())

// TODO: Anslut till din MongoDB databas
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// API endpoints
// Här kan du lägga till endpoints för att skapa, läsa, uppdatera och radera användare, hushåll och husdjur.

// Starta servern
const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

app.post('/users', async (req, res) => {
  try {
    const newUser = new User(req.body)
    const savedUser = await newUser.save()
    res.json(savedUser)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})
