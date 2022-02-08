import { gameBoard } from "./gameBoard";
import { get } from "./utils/get";

// Ici, on retrouvera tout ce qui peut être relatif au temps.

// on définit nos variables
let seconde = 0;
let timeInterval = null;

const progressBar = get.byId("barStatus");
const startButtonDOM = get.byId("start");
const timeDOM = get.byId("time");
const cardsList = get.allByClass(".card");

const timer = {
  // cette fonction permet de :
  // - démarrer le timer,
  // - de désactiver le bouton,
  // - de rajouter l'event clique sur chaque carte.
  startTimer: (startButtonDOM) => {
    timer.timerCount(true);
    startButtonDOM.disabled = true;
    gameBoard.startBtn(cardsList);
  },

  // cette fonction permet de :
  // - désactiver le timer,
  // - d'activer le bouton start,
  // - de remettre la barre de progression à 0%
  // - de remettre la variable du temps à 0
  // - de remettre le texte du compte à rebours à 60s
  // - de remettre la bonne couleur au compte à rebours
  // - de rajouter l'event clique sur chaque carte.
  resetTimer: () => {
    timer.timerCount(false);
    startButtonDOM.disabled = false;
    progressBar.style.width = "0%";
    seconde = 0;
    timeDOM.textContent = `60s`;
    timeDOM.style.color = "rgba(255, 70, 141, 0.918)";
  },

  // cette fonction permet d'activer ou de désactiver le timer
  timerCount: (isON) => {
    // Si isOn est false alors on enlève l'interval.
    if (!isON) clearInterval(timeInterval);
    // Si isOn est true et que les secondes sont à 0, alors on démarre l'interval.
    if (isON && seconde === 0) {
      clearInterval(timeInterval);
      timeInterval = setInterval(() => {
        seconde += 1;
        // on augmente la progresse barre de façon progressive suivant le nombre de secondes
        progressBar.style.width = ((seconde * 100) / 60).toFixed(2) + "%";
        // on diminue le compte à rebours.
        timeDOM.textContent = `${60 - seconde}s`;
        // on change la couleur du compte à rebours.
        timeDOM.style.color = "rgb(89, 119, 255)";
        // si le temps est supérieur à 60 alors :
        // - on arrête l'interval
        // - on regarde si on a gagné ou perdu.
        if (seconde >= 60) {
          timeInterval = clearInterval(timeInterval);
          gameBoard.isWinOrLost();
        }
      }, 1000); // on exécute timeInterval toutes les 1000ms
      return timeInterval;
    }

    return clearInterval(timeInterval);
  },
  // cette fonction permet de retourner le nombre de seconde.
  getSeconde: () => seconde,
};

export { timer };