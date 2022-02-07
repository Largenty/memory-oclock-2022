import { card } from "./card/index";
import { gameBoard } from "./gameBoard";
import { leadershipBoard } from "./leadershipBoard";
import { userName } from "./userName";
import { get } from "./utils/get";

// lors du lancement de l'application, on exécutera que app.init()

const app = {
  init: () => {
    // O
    for (let i = 1; i <= 2; i++) card.createCard();
    document.title = "Memoxy";
    const cardsList = get.allByClass(".card");
    const parentEl = cardsList[0].parentElement;

    gameBoard.shuffle(parentEl);
    gameBoard.resetBtn(cardsList);
    gameBoard.startBtn(cardsList);
    leadershipBoard.getListPlayers();
    userName.inputForm();
  },
};

document.addEventListener("load", app.init());
