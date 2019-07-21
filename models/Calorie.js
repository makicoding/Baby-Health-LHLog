const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const calorieSchema = new Schema({
  username: String,
  date: Date,
  mealtype: String,
  sectionno: String,
  mealname: String,
  qty: Number,
  unitcal: Number,
  pee: String,
  poop: String,
  breast: String,
  breastduration: String,
  formulaamount: String,
  comments: String
});

const Calorie = mongoose.model("Calorie", calorieSchema);

module.exports = Calorie;