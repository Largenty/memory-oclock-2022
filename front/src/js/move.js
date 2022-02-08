// Ici, on retrouvera tout ce qui peut être relatif au nombre de coups.

let count = 0;

const move = {
  // ajoute +1 au nombre de coups
  addCount: () => {
    count++;
    return count;
  },
  // on retourne le nombre de coups
  getCount: () => count,
  // on set la variable à 0.
  resetCount: () => (count = 0),
};

export { move };
