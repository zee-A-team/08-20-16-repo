'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const animalSchema = new Schema({
  "_id": String,
  "common_name": String,
  "scientific_name": String,
  "date": String,
  "Range": String,
  "Type": String,
  "latitude": String,
  "longitude": String,
  "latlong": String,
  "country": String,
  "continent": String,
});

module.exports = mongoose.model('animals', animalSchema);