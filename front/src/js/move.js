let count = 0;

const move = {
  // Cette fonction permet d'ajoute +1 au nombre de coups
  addCount: () => {
    count++;
    return count;
  },
  // Cette fonction permet de retourner le nombre de coups
  getCount: () => count,
  // Cette fonction permet de mettre le nombre de coup à 0.
  resetCount: () => (count = 0),
};

export { move };
