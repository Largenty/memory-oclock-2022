const express = require("express");
const Player = require("../models/playerModel");
// express.Router() est un middleware permettant de créer des routes modulaires et donc pouvant être remontés :)
const router = express.Router();

// Pour contruire notre route on doit fournir quelques éléments :
// - le nom de la route ( .route('/'))
// - la méthode que l'on souhaite utiliser (.get, .post, .put/.patch, .delete)
// - la fonction que l'on souhaite exécuter par la suite. (elle se trouve dans notre méthode)
// ex:
// router.route('/test').get((req, res) => console.log('hello))
// La chose qui est bien avec ces méthodes (merci express), c'est que l'on peut faire passer x function dans notre méthode pour vérifier d'autre chose avant d'envoyer la requête sur notre serveur.
// On utilisera alors en plus de (req: request, res: response) next ! Notre fonction (intermédiaire) sera alors un middleware.
// ex:
// router.route('/').get((req, res, next) => {req !== null ? next(): console.log('Oups'), (req, res)=>{console.log('je suis la deuxième fonction')}})

// Getting all player

// On utilisera une fonction asynchrone car nous devons attendre la réponse de notre serveur.
// Ici on attend la liste de tous les joueurs, donc on utilise la méthode GET.
router.route("/").get(async (req, res) => {
  try {
    // Model.find() permettra de nous retourner tous les joueurs.
    const players = await Player.find();
    // Si le nombre de joueurs est supérieur ou égal à 1 alors on retourne ce/ces joueurs. Sinon on envoit un message pour avertir que notre requête à fonctionné mais il n'y a pas de joueur d'enregistré.
    // on envoie le statut de notre requête (201 = réussi, 500 = le serveur a rencontré un problème)
    // Je vous invite à regarder les autres statut ici :
    // https://developer.mozilla.org/fr/docs/Web/HTTP/Status
    players.length >= 1
      ? res.status(201).json({ data: players })
      : res.status(201).json("There is actually no players !");
  } catch (error) {
    // si il y a une erreur, on envoie un message d'erreur avec un statut 500.
    res.status(500).json({
      message: error.message,
    });
  }
});

// Post one
// Ici au lieu d'avoir tous les joueurs on souhaite poster le score d'un joueur qui vient de jouer.
router.route("/").post(async (req, res) => {
  // on récupére les données que nous envoie le front dans le body de la requête.
  const { userName, time, move } = req.body;
  // on crée ensuite un nouveau joueur avec ces données
  const player = new Player({
    userName,
    time,
    move,
    score: time * move,
  });

  // Et on essaye de sauvegarder le tout dans notre BDD.
  try {
    const newPlayer = await player.save();
    // si on réussi un petit message comprenant les nouvelles data créées est retourné avec un statut : 201 :)
    res.status(201).json(newPlayer);
  } catch (error) {
    // Sinon on envoie un petit message avec un statut 400:
    // 400 = Bad Request indique que le serveur ne peut pas comprendre ou traiter la requête en raison d'une erreur côté client (par exemple une requête dont la syntaxe ou le contenu est invalide).
    res.status(400).json({
      message: error.message,
    });
  }
});


// Ici on va créer une fonction qui va venir vérifier si un joueur exist (grâce à l'id que l'on passer dans l'url)
// Cette fonction est un middleware.
const verifyIfplayerExist = async (req, res, next) => {
  let player;
  try {
    player = await Player.findById(req.params.id);
    if (player == null) {
      return res.status(404).json({ message: "cannot find player" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.player = player;
  next();
};

// Get player by id && using a middleware
router.route("/:id").get(verifyIfplayerExist, async (req, res) => {
  res.send(res.player.userName);
});

// Petit challenge:
// Je vous laisse créer la fonction à l'intérieur de cette méthode pour supprimer un utilisateur
router.route("/:id").delete(verifyIfplayerExist, async (req, res) => {});

// On export notre module pour pouvoir l'utiliser ailleur.
module.exports = router;
