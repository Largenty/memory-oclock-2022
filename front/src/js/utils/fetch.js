const url = "http://localhost:8888/players/";
const fetchData = {
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
      .then((res) => "success")
      .catch((err) => {
        console.log(err);
      });
    return postScore;
  },
};

export { fetchData };
