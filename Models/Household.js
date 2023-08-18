const mongoose = require('mongoose')

const HouseholdSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  members: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  pets: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Pet'
    }
  ]
})

module.exports = mongoose.model('Household', HouseholdSchema)
