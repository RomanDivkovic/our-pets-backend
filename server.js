const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// Importera modeller (du kommer fortfarande behöva dessa för andra delar av din app)
const User = require('./Models/User')
const Household = require('./Models/Household')
const Pet = require('./Models/Pet')

const app = express()

app.use(bodyParser.json())

// Anslut till din MongoDB databas
mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// Importera och använd dina routes
const userRoutes = require('./routes/userRoutes')
app.use('/users', userRoutes)

// Starta servern
const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
