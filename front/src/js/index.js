import { card } from "./card/index";
import { gameBoard } from "./gameBoard";
import { leadershipBoard } from "./leadershipBoard";
import { userName } from "./userName";
import { get } from "./utils/get";

// Lors du lancement de l'application, on exécutera que app.init()

const app = {
  init: () => {
    // create.cards() est une fonction qui permet de créer chaque carte que l'on a dans nos datas.
    // Comme on a besoin d'une paire de chaque élément, on exécute deux fois la fonction.
    for (let i = 1; i <= 2; i++) card.createCards();

    // On récupére chaque élément possédant la classe "card" (document.querySelectorAll) avec notre fonction custom (utils)
    const cardsList = get.allByClass(".card");
    // On récupére l'élément parent de la première carte.
    const parentEl = cardsList[0].parentElement;

    // Dès le lancement de la page, on :
    // - mélange les cartes fraîchement créées,
    // - ajoute des events listener sur les boutons (start / reset / input)
    // - récupére la liste des 10 meilleurs joueurs
    gameBoard.shuffle(parentEl);
    gameBoard.resetBtn(cardsList);
    gameBoard.startBtn(cardsList);
    userName.inputForm();
    leadershipBoard.getListPlayers();
  },
};
// L’évènement load est émis lorsqu’une ressource et ses ressources dépendantes sont complètement chargées.
document.addEventListener("load", app.init());
