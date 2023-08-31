const mongoose = require('mongoose');

//Schema is like the blueprint, or structure 
const veggieSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    color:  { type: String, required: true },
    readyToEat: Boolean
});

//model adds all the methods to the schema that we can use to edit our data
const Veggie = mongoose.model('Veggie', veggieSchema);

module.exports = Veggie;