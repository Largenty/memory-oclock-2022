const mongoose = require("mongoose");

// On va créer un model type d'un joueur.
// Pour cela on utilise notre pont magic Mongoose :) !

// Pour chaque champ on va spécifier :
// - le type attendu
// - s'il est obligatoire ou non (si on ne le spécifie pas required est automatiquement paramétré à false)

const playerSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  time: { type: Number, required: true },
  move: { type: Number, required: true },
  score: Number,
});

// Pour avoir accès à ce modèle dans nos autres fichiers, on export le module :) !
module.exports = mongoose.model("Player", playerSchema);
