const mongoose = require("mongoose");

const surveySchema = mongoose.Schema({
  category: {
    type: String,
    required: [true, "Please enter name"],
    min: 3,
    max: 25,
  },
  subcategory1: {
    type: String,
    required: [true, "Please enter subcategory1"],
    min: 3,
  },
  subcategory2: {
    type: String,
    min: 3,
  },
  subcategory3: {
    type: String,
    min: 3,
  },
  subcategory4: {
    type: String,
    min: 3,
  },
  question: {
    type: String,
    required: [true, "Please enter question"],
    unique: [true, "question is already exists"],
    min: 3,
  },
});

const Survey = mongoose.model("survey", surveySchema);

module.exports = Survey;
