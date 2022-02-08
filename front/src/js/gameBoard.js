import { leadershipBoard } from "./leadershipBoard";
import { timer } from "./timer";
import { move } from "./move";
import { get } from "./utils/get";
import { userName } from "./userName";

// Ici, on retrouvera tout ce qui peut être relatif au bon fonctionnement du jeu.

// on instancie nos variables que l'on va réutiliser dans nos fonctions.
// isFlip pour savoir si la carte est retournée ou non
// lockGame permet de locker le jeu, c'est à dire que le joueur ne pourra pas retourner les cartes.
// firstCardSelected, secondCardSelected servent à savoir quelle est la première  et la seconde carte sélectionnée par l'utilisateur
// start/resetButtonDOM permet de nous renvoyer l'élément voulu.

let isFlip = false;
let lockGame = false;
let firstCardSelected, secondCardSelected;
const startButtonDOM = get.byId("start");
const resetButtonDOM = get.byId("reset");

// Si l'utilisateur n'a pas rentré de pseudo cet Array permettra d'en créer.
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
  // cette fonction prends comme argument la liste de toutes les cartes qui ont été créées
  startBtn: (cardsList) => {
    // on ajoute un event sur le bouton start
    startButtonDOM.addEventListener("click", () => {
      // on reset le timer
      timer.resetTimer();
      // on reset le board
      gameBoard.resetBoard();
      // on ajoute un event listener sur chaque carte avec la fonction flip
      cardsList.forEach((card) =>
        card.addEventListener("click", gameBoard.flip)
      );
      // on démarre le timer.
      timer.startTimer(startButtonDOM);
    });
  },

  // cette fonction prends comme argument la liste de toutes les cartes qui ont été créées
  resetBtn: (cardsList) => {
    // on ajoute un event sur le bouton reset
    resetButtonDOM.addEventListener("click", () => {
      // on enlève l'event listener sur chaque carte et on retire la class flip.
      cardsList.forEach((card) => {
        card.classList.remove("flip");
        card.removeEventListener("click", gameBoard.flip);
      });
      // on reset le timer
      timer.resetTimer();
      // on rmélange le jeu
      gameBoard.shuffle(cardsList[0].parentElement);
      // on reset le compteur de mouvement
      move.resetCount();
      // on lock le game
      lockGame = true;
    });
  },

  // cette fonction permet de savoir
  // - si on a selectionner la première carte ou la seconde carte
  // - de retourner la carte si le jeu n'est pas lock
  // - d'ingrémenter le nombre de mouvement
  flip: (event) => {
    // ajoute +1 au nombre de mouvement
    move.addCount();
    const { parentElement } = event.target;
    // si le jeu est bloqué alors on n'exécute pas le reste.
    if (lockGame) return;
    // si l'élément parent sélectionné est égal à la première carte sélectionné, alors on n'éxécute pas le reste de la fonction.
    if (parentElement === firstCardSelected) return;
    // on ajoute la class flip au parent (à notre div (div > img face | img retourné))
    parentElement.classList.add("flip");
    // si isFlip est true alors on éxécute la condition.
    if (!isFlip) {
      isFlip = true;
      firstCardSelected = parentElement;
      return;
    }
    // si isFlip === true, que le jeu n'est pas bloqué et que l'élément parent n'est pas égale à la première carte sélectionné alors ça veut dire que l'on a sélectionné la seconde carte
    secondCardSelected = parentElement;
    // on va vérifier si les deux cartes sont les mêmes.
    gameBoard.isMatch();
  },

  isMatch: () => {
    // si les data de chaque carte sélectionnées correspondent alors on désactive ces cartes ou si elles ne correspondent pas, on les retourne.
    let isMatch =
      firstCardSelected.dataset.card === secondCardSelected.dataset.card;
    isMatch ? gameBoard.disable() : gameBoard.unFlip();
  },

  unFlip: () => {
    // on lock le jeu, pour éviter que l'utilisateur retourne d'autres cartes.
    lockGame = true;
    setTimeout(() => {
      // on retire la class flip des cartes que l'on vient de sélectionner.
      firstCardSelected.classList.remove("flip");
      secondCardSelected.classList.remove("flip");
      // on reset le board cad (isFlip et lockgame = false)
      gameBoard.resetBoard();
    }, 500);
  },

  // Comme c'est un match, on retire les fonctions sur les cartes sélectionnées.
  disable: () => {
    firstCardSelected.removeEventListener("click", gameBoard.flip);
    secondCardSelected.removeEventListener("click", gameBoard.flip);
    // on vérifie ensuite si le jeu est terminé ou non
    gameBoard.isWinOrLost();
    // on reset le board cad (isFlip et lockgame = false)
    gameBoard.resetBoard();
  },

  resetBoard: () => {
    // redéfinie les états des variables comme elles étaient au début du jeu.
    [isFlip, lockGame] = [false, false];
    [firstCardSelected, secondCardSelected] = [null, null];
  },

  // Fonction qui permet de mélanger le jeu suivant la méthode de : Fisher–Yates
  // Comme je n'étais pas satisfait de ma propre fonction j'ai préféré en chercher une plus performante.
  // https://stackoverflow.com/questions/7070054/javascript-shuffle-html-list-element-order
  shuffle: (parentEl) => {
    for (let i = parentEl.children.length; i >= 0; i--) {
      parentEl.appendChild(parentEl.children[(Math.random() * i) | 0]);
    }
  },

  // Fonction permettant de savoir si le jeu :
  // - continue
  // - s'arrête à cause du temps
  // ou si le joueur à gagner.
  isWinOrLost: () => {
    // on récupère le temps
    const time = timer.getSeconde();

    // on regarde le nombre de cartes retournées
    const numberOfFlippedCard = get.allByClass(".flip").length;
    // on récupère la liste de toutes les cartes.
    const cardsList = get.allByClass(".card");
    // on prépare nous data dans un éventuel envoie vers notre serveur.
    const data = {
      userName:
        // s'il n'y a pas de pseudo rentré alors on en crée un au hasard avec notre tableau ligne 22
        userName.get() ??
        `O'${randomName[Math.floor(Math.random() * randomName.length - 1)]}`,
      time,
      // on récupère le nombre de coups joués
      move: move.getCount(),
    };

    // si le nombre de cartes retournées est égal au nombre de cartes dans tout le jeu et que le temps est inférieur à 60 alors :
    // - on vérouille le jeu
    // - on arrête le timer
    // - on envoie notre score
    // - on refresh le score
    // - on récupére la liste du top 10.
    // - on met le nombre de coups à 0
    // - on envoie une alerte annonçant la bonne nouvelle.
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
        } (temps: ${data.time}s, move: ${data.move} )`
      );
    }

    // si le timer est supérieur ou égal à 60 alors c'est que le joueur à perdu.
    // - on vérouille le jeu
    // - on arrête le timer
    // - on met le nombre de coups à 0
    // - on envoie une alerte annonçant la mauvaise nouvelle.
    if (time >= 60) {
      lockGame = true;
      timer.timerCount(false);
      move.resetCount();
      alert(
        `C'est perdu ${
          data.userName
        } ... ${time}s se sont écoulées, il manque ${(
          (cardsList.length - numberOfFlippedCard) /
          2
        ).toFixed(0)} ${
          (cardsList.length - numberOfFlippedCard) / 2 > 1 ? "paires" : "paire"
        }...`
      );
    }
    return;
  },
};

export { gameBoard };
