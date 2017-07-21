var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create the Schema
var personSchema = new Schema({
  name: {type: String, required: true, unique: true},
  location: {type: String},
  dateOfBirth: {type: String, required: true},
  internetPoints: {type: Number, required: true, default: 1000}
});

// export our model
module.exports = mongoose.model('Person', personSchema);
