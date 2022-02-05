import { fetchData } from "./utils/fetch";
import { get } from "./utils/get";

const tbodyDOM = get.byId("tbody");

const leadershipBoard = {
  getListPlayers: async () => {
    const playersList = await fetchData.getAllPlayers();

    playersList.data
      .sort((a, b) => a.score - b.score)
      .slice(0, 10)
      .map((data, key) => {
        leadershipBoard.createNewTabLines(data, key);
      });

    return playersList.data;
  },

  postScore: async (data) => {
    await fetchData.post(data);
  },

  refresh: () => {    
    while (tbodyDOM.firstChild) {
      tbodyDOM.removeChild(tbodyDOM.lastChild);
    }
  },

  createNewTabLines: (data, key) => {
    // Insère une ligne dans la table à l'indice de ligne "key"
    const newRow = tbodyDOM.insertRow(key);

    for (let i = 0; i <= 4; i++) {
      const newCell = newRow.insertCell(i);
      let textCell = (i) => {
        switch (i) {
          case 0:
            return document.createTextNode(key + 1);
          case 1:
            return document.createTextNode(data.userName);
          case 2:
            return document.createTextNode(data.score);
          case 3:
            return document.createTextNode(`${data.time}s`);
          case 4:
            return document.createTextNode(data.move);
          default:
            return;
        }
      };
      newCell.appendChild(textCell(i));
    }
  },
};

export { leadershipBoard };
