// Express.js est un framework minimaliste pour node.js. Il permet de créer facilement une application web.
// Ce framework convient parfaitement pour des petites applications comme la notre, c'est pour cela que nous allons l'utiliser.
const express = require("express");
// Mongoose va servir de passerelle entre notre serveur Node.js et notre serveur MongoDB.
const mongoose = require("mongoose");
// Cors est un raccourcie pour Cross-Origin Ressource Sharing, C'est un méchanisme qui autorise ou restreint les ressources demandées par notre front. Il servira à sécuriser notre server
const cors = require("cors");
require("dotenv").config();

// * Avant de commencer à faire nos routes, nos models etc ...
// Il faut que l'on arrive à :
// - créer un serveur qui tourne,
// - se connecter à notre BDD (ici on utilise mongoDB)

const app = express();

// cors() sera utilisé comme un middleware. Il va vérifier les requêtes qui sont envoyées.
app.use(cors());
app.options("*", cors());

// Mongoose va tenter d'établir une connexion entre ce serveur et notre serveur MongoDB.
// Pour éviter de montrer l'url de notre serveur MongoDB, on va utiliser dotenv pour récupérer notre variable dans le fichier .env
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

// On va ensuite vérifier :
// - s'il n'y a pas d'error lors de la connection
// - puis on affichera un message dans notre console pour nous dire que l'on est bien connecté.
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database ON !"));

// express.json() est une méthode intégrée à express pour reconnaître l'object entrant. Il va vérifier que c'est bien un object JSON. C'est un middleware ;).
app.use(express.json());

// On import nos routes.
// On définit une routes pour nos joueurs (ici : localhost:3000/players).
const playersRouter = require("./routes/players");
app.use("/players", playersRouter);

// Aller encore un petit effort !
// Maintenant on va définir le port de notre serveur:
// - 8888 || 3000
// Une fois que notre app est à l'écoute, on envoit un petit message pour nous rassurer :) !
const port =  process.env.PORT || 3000;
app.listen(port, () => console.log(`Server on ! (port: ${port})`));
