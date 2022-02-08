import { card } from "./card/index";
import { gameBoard } from "./gameBoard";
import { leadershipBoard } from "./leadershipBoard";
import { userName } from "./userName";
import { get } from "./utils/get";

// lors du lancement de l'application, on exécutera que app.init()

const app = {
  init: () => {
    // create.cards() est une fonction qui permet de créer chaque carte que l'on a dans nos data.
    // Comme on a besoin d'une paires de chaque élément, on exécute deux fois la fonction.
    for (let i = 1; i <= 2; i++) card.createCards();
    // On change le titre de la page (onglet)
    document.title = "Memoxy";
    // On récupére chaque éléments possédant la class "card" (document.querySelectorAll)
    // J'ai choisi de créer une fonction custom pour le cas ou j'avais besoin de créer des execption.
    const cardsList = get.allByClass(".card");
    // On récupére l'élément parent de la première carte.
    const parentEl = cardsList[0].parentElement;

    // Dès le lancement de la page, on :
    // - mélange le jeu fraîchement créé,
    // - on ajoute des events listener sur les boutons
    // - on récupére la liste des 10 meilleurs joueurs
    gameBoard.shuffle(parentEl);
    gameBoard.resetBtn(cardsList);
    gameBoard.startBtn(cardsList);
    userName.inputForm();
    leadershipBoard.getListPlayers();
  },
};
// L’évènement load est émis lorsqu’une ressource et ses ressources dépendantes sont completement chargées.
document.addEventListener("load", app.init());
