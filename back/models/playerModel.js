const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  time: { type: Number, required: true },
  move: { type: Number, required: true },
  score: Number,
});

module.exports = mongoose.model("Player", playerSchema);
