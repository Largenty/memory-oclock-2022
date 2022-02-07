const mongoose = require("mongoose");

// On va créer un model type d'un joueur.
// Pour cela on utilise notre pont magic Mongoose :) !

// Pour chaque champs on va spécifier :
// - le type attendu
// - si il est obligatoire ou non (si on ne le spécifie pas required est automatiquement paramétré à false)

// ex : new mongoose.Schema({
//   date: {typer: Date, required: true}
// })

// Ici on va juste rentrer le pseudo du joueur, le nombre de coups qu'il a fait, le temps et son score.

const playerSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  time: { type: Number, required: true },
  move: { type: Number, required: true },
  score: Number,
});

// Et on n'oublie pas d'exporter notre model, pour avoir accès à ce model dans nos autres fichiers :) !
module.exports = mongoose.model("Player", playerSchema);
