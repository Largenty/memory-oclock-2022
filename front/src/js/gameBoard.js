import { leadershipBoard } from "./leadershipBoard";
import { timer } from "./timer";
import { move } from "./move";
import { get } from "./utils/get";
import { userName } from "./userName";

let isFlip = false;
let lockGame = false;
let firstCardSelected, secondCardSelected;
const startButtonDOM = get.byId("start");
const resetButtonDOM = get.byId("reset");

const randomName = [
  "Yes",
  "No",
  "MinceAlors",
  "Rizon",
  "Top",
  "Lala",
  "Zut",
  "OhOh!",
  "Tacos",
  "Zone",
  "Bewan",
];

const gameBoard = {
  startBtn: (cardsList) => {
    startButtonDOM.addEventListener("click", () => {
      timer.resetTimer();
      gameBoard.resetBoard();
      cardsList.forEach((card) =>
        card.addEventListener("click", gameBoard.flip)
      );
      timer.startTimer(startButtonDOM);
    });
  },

  resetBtn: (cardsList) => {
    resetButtonDOM.addEventListener("click", () => {
      cardsList.forEach((card) => {
        card.classList.remove("flip");
        card.removeEventListener("click", gameBoard.flip);
      });

      timer.resetTimer();

      gameBoard.shuffle(cardsList[0].parentElement);
      gameBoard.startBtn(cardsList);
      move.resetCount();
      lockGame = true;
    });
  },

  flip: (event) => {
    move.addCount();
    const { parentElement } = event.target;
    if (lockGame) return;
    if (parentElement === firstCardSelected) return;

    parentElement.classList.add("flip");

    if (!isFlip) {
      isFlip = true;
      firstCardSelected = parentElement;
      return;
    }

    secondCardSelected = parentElement;
    gameBoard.isMatch();
  },

  unFlip: () => {
    lockGame = true;
    setTimeout(() => {
      firstCardSelected.classList.remove("flip");
      secondCardSelected.classList.remove("flip");
      gameBoard.resetBoard();
    }, 500);
  },

  isMatch: () => {
    let isMatch =
      firstCardSelected.dataset.card === secondCardSelected.dataset.card;
    isMatch ? gameBoard.disable() : gameBoard.unFlip();
  },

  disable: () => {
    firstCardSelected.removeEventListener("click", gameBoard.flip);
    secondCardSelected.removeEventListener("click", gameBoard.flip);
    gameBoard.isWinOrLost();
    gameBoard.resetBoard();
  },

  resetBoard: () => {
    [isFlip, lockGame] = [false, false];
    [firstCardSelected, secondCardSelected] = [null, null];
  },
  // https://stackoverflow.com/questions/7070054/javascript-shuffle-html-list-element-order
  shuffle: (parentEl) => {
    for (let i = parentEl.children.length; i >= 0; i--) {
      parentEl.appendChild(parentEl.children[(Math.random() * i) | 0]);
    }
  },

  isWinOrLost: () => {
    const time = timer.getSeconde();
    const numberOfFlippedCard = get.allByClass(".flip").length;
    const cardsList = get.allByClass(".card");
    const data = {
      userName:
        userName.get() ??
        `O'${randomName[Math.floor(Math.random() * randomName.length - 1)]}`,
      time,
      move: move.getCount(),
    };

    if (numberOfFlippedCard == cardsList.length && time < 60) {
      lockGame = true;
      timer.timerCount(false);

      leadershipBoard.postScore(data);
      leadershipBoard.refresh();
      leadershipBoard.getListPlayers();
      move.resetCount();
      return alert(
        `C'est gagné ${data.userName} !!! Vous avez fait un score de ${
          data.time * data.move
        } (temps: ${data.time}, move: ${data.move} )`
      );
    }

    if (time >= 60) {
      lockGame = true;
      timer.timerCount(false);
      move.resetCount();
      alert(
        `C'est perdu ${
          data.userName
        } ... ${time}s se sont écoulées, il manque ${(
          (16 - numberOfFlippedCard) /
          2
        ).toFixed(0)} ${
          (16 - numberOfFlippedCard) / 2 > 1 ? "paires" : "paire"
        }...`
      );
    }
    return;
  },
};

export { gameBoard };
