const express = require("express");
const Player = require("../models/playerModel");
// express.Router() est un middleware permettant de créer des routes modulaires et donc pouvant être remontés :)
const router = express.Router();

// Pour construire notre route on doit fournir quelques éléments :
// - le nom de la route ( .route('/'))
// - la méthode que l'on souhaite utiliser (.get, .post, .put/.patch, .delete)
// - la fonction que l'on souhaite exécuter par la suite
// ex:
// router.route('/test').get((req, res) => console.log('hello))
// La chose qui est bien avec ces méthodes (merci express), c'est que l'on peut faire passer x functions pour vérifier d'autres choses ! Avant que cela ne touche le serveur.
// On utilisera alors en plus de req: request et res: response, next ! Notre fonction (intermédiaire) sera alors un middleware.
// ex:
// router.route('/').get((req, res, next) => {req !== null ? next(): console.log('Oups'), (req, res)=>{console.log('je suis la deuxième fonction')}})

// Getting all player

// On utilisera une fonction asynchrone car nous devons attendre la réponse de notre serveur.
// Ici on attend la liste de tous les joueurs, donc on utilise la méthode GET d'express.
router.route("/").get(async (req, res) => {
  try {
    // Model.find() permettra de retourner tous les joueurs.
    const players = await Player.find();
    // Si le nombre de joueurs est supérieur ou égal à 1 alors on retourne ce/ces joueurs. 
    // Sinon on envoi un message pour avertir que notre requête a fonctionné mais il n'y a pas de joueurs d'enregistrés.
    // Concernant les statuts : (201 = réussi, 500 = le serveur a rencontré un problème)
    // Je vous invite à regarder les autres statuts ici :
    // https://developer.mozilla.org/fr/docs/Web/HTTP/Status
    players.length >= 1
      ? res.status(201).json({ data: players })
      : res.status(201).json("There is actually no players !");
  } catch (error) {
    // s'il y a une erreur, on envoie un message d'erreur avec un statut 500.
    res.status(500).json({
      message: error.message,
    });
  }
});

// Post one
// Ici au lieu d'avoir tous les joueurs on souhaite enregistrer les données d'un joueur que nous a envoyé le fornt.
router.route("/").post(async (req, res) => {
  const { userName, time, move } = req.body;
  // on crée un nouveau joueur avec ces données et suivant notre modèle !
  const player = new Player({
    userName,
    time,
    move,
    score: time * move,
  });

  // Et on essaye de sauvegarder le tout dans notre BDD.
  try {
    const newPlayer = await player.save();
    // si on réussi, on a un joli : 201 
    res.status(201).json(newPlayer);
  } catch (error) {
    // Sinon on envoie un petit message avec un statut 400:
    // 400 = Bad Request indiqué que le serveur ne peut pas comprendre ou traiter la requête en raison d'une erreur côté client (par exemple une requête dont la syntaxe ou le contenu est invalide).
    res.status(400).json({
      message: error.message,
    });
  }
});


// Ici on va créer une fonction qui va venir vérifier si un joueur existe (grâce à l'id que l'on a passé dans l'url)
// Cette fonction est un middleware.
const verifyIfplayerExist = async (req, res, next) => {
  let player;
  try {
    // Cette fois-ci, on va récupérer l'id dans notre route et on va vérifier si on le trouve.
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
// Je vous laisse créer la fonction qui va permettre de supprimer un utilisateur.
router.route("/:id").delete(verifyIfplayerExist, async (req, res) => {});

module.exports = router;
