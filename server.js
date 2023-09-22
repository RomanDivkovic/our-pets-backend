const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const petRoutes = require('./routes/petsRoutes')
const householdRoutes = require('./routes/householdRoutes')

const User = require('./Models/User')
const Household = require('./Models/Household')
const Pet = require('./Models/Pet')

const app = express()

app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.use('/pets', petRoutes)
app.use('/households', householdRoutes)
const userRoutes = require('./routes/userRoutes')
app.use('/users', userRoutes)

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
