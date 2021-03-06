import { fetchData } from "./utils/fetch";
import { get } from "./utils/get";

// Ici, on retrouvera tout ce qui peut être relatif à notre tableau.

const tbodyDOM = get.byId("tbody");

const leadershipBoard = {
  // Cette fonction va nous créer les lignes de notre tableau avec les data reçues.
  // Comme on fait une demande à notre serveur, on utilisera une fonction asynchrone.
  getListPlayers: async () => {
    // on récupére les data de tous les joueurs.
    const playersList = await fetchData.getAllPlayers();
    // on va les trier suivant le score, on va récupérer les 10 premiers et on va créer les lignes dans notre tableau.
    playersList.data
      .sort((a, b) => a.score - b.score)
      .slice(0, 10)
      .map((element, key) => {
        leadershipBoard.createNewTabLines(element, key);
      });

    return playersList.data;
  },

  // Cette fonction permet d'enregistrer notre joueur avec son temps, le nombre de coups et son pseudo.
  postScore: async (data) => {
    await fetchData.post(data);
  },

  // Cette fonction permet de supprimer tous les enfants se trouvant dans notre body.
  refresh: () => {    
    while (tbodyDOM.firstChild) {
      tbodyDOM.removeChild(tbodyDOM.lastChild);
    }
  },

  // Cette fonction permet de créer les lignes du tableau 
  createNewTabLines: (data, key) => {
    // Insère une ligne dans la table à l'indice de ligne "key" (0 = première ligne du tableau)
    const newRow = tbodyDOM.insertRow(key);
    // chaque ligne se compose de plusieurs cellules.
    // Ici nous avons 5 colonnes ( rank, username, score, time et move)
    for (let i = 0; i <= 4; i++) {
      // on crée la cellule
      const newCell = newRow.insertCell(i);
      // et suivant la cellule on va injecter la data qui nous intéresse.
      let textCell = (i) => {
        switch (i) {
          // rank
          case 0:
            return document.createTextNode(key + 1);
          // username
          case 1:
            return document.createTextNode(data.userName);
          // score
          case 2:
            return document.createTextNode(data.score);
          // time
          case 3:
            return document.createTextNode(`${data.time}s`);
          // move
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
