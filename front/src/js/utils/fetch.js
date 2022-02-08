// Ici, on retrouvera tout ce qui peut être relatif aux requêtes que nous pouvons faire.

const url = "http://localhost:8888/players/";
const fetchData = {
  // cette fonction permet de récupèrer tout les joueurs.
  // comme on fait un appel vers notre back, on utilisera une fonction asynchrone.
  getAllPlayers: async () => {
    const allPlayersData = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      redirect: "follow",
      referrerPolicy: "no-referrer",
    })
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
      });

    return allPlayersData;
  },
  // cette fonction permet de créer le score d'un joueur.
  // elle prendra en paramètre: le userName, le temps et les coups.
  // comme on fait un appel vers notre back, on utilisera une fonction asynchrone.
  post: async (data) => {
    const postScore = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      redirect: "follow",
      referrerPolicy: "no-referrer",
    })
      .then((res) => console.log(res.json()))
      .catch((err) => {
        console.log(err);
      });
    return postScore;
  },
};

export { fetchData };
