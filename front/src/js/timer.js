import { gameBoard } from "./gameBoard";
import { get } from "./utils/get";

let seconde = 0;
let timeInterval = null;

const progressBar = get.byId("barStatus");
const startButtonDOM = get.byId("start");
const timeDOM = get.byId("time");
const cardsList = get.allByClass(".card");

const timer = {
  startTimer: (startButtonDOM) => {
    timer.timerCount(true);
    startButtonDOM.disabled = true;
    gameBoard.startBtn(cardsList);
  },

  resetTimer: () => {
    timer.timerCount(false);
    startButtonDOM.disabled = false;
    progressBar.style.width = "0%";
    seconde = 0;
    timeDOM.textContent = `60s`;
    timeDOM.style.color = "rgba(255, 70, 141, 0.918)";
  },

  timerCount: (isON) => {
    if (!isON) clearInterval(timeInterval);

    if (isON && seconde === 0) {
      clearInterval(timeInterval);
      timeInterval = setInterval(() => {
        seconde += 1;
        progressBar.style.width = ((seconde * 100) / 60).toFixed(2) + "%";
        timeDOM.textContent = `${60 - seconde}s`;
        timeDOM.style.color = "rgb(89, 119, 255)";
        if (seconde >= 60) {
          timeInterval = clearInterval(timeInterval);
          gameBoard.isWinOrLost();
        }
      }, 1000);
      return timeInterval;
    }

    return clearInterval(timeInterval);
  },

  getSeconde: () => seconde,
};

export { timer };