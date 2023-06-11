const mongoose = require('mongoose');

const empcontactSchema = new mongoose.Schema({
  name:{type: String, required: true},
  jobtitle:{type: String, required: true},
  phoneNumber:{type: String, required: true, unique: true},
  email:{type: String, required: true, unique: true},
  address:{type: String, required: true},
  city:{type: String, required: true},
  state:{type: String, required: true},
  primaryContact:{type: String, required: true},
  priNumber:{type: String, required: true, unique: true},
  priRelationship:{type: String, required: true},
  secondaryContact:{type: String, required: true},
  secNumber:{type: String, required: true, unique: true},
  secRelationship:{type: String, required: true},
},{collection: 'empcontacts'});

const model = mongoose.model('empcontact', empcontactSchema);

module.exports = model;