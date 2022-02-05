let count = 0;

const move = {
  addCount: () => {
    count++;
    return count;
  },
  getCount: () => count,
  resetCount: () => (count = 0),
};

export { move };
