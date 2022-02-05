import { dataImgs } from "./dataImgs";

const card = {
  createCard: () => {
    dataImgs.forEach((dataImage) => {
      const { source, alt, dataSet } = dataImage;
      const container = card.cardContainer(dataSet);
      const frontCard = card.frontCard(source, alt);
      const backCard = card.backCard();
      const gameBoard = document.getElementsByClassName("card-container");
      gameBoard[0].appendChild(container);
      container.appendChild(frontCard);
      container.appendChild(backCard);
    });
  },
  cardContainer: (dataSet) => {
    const container = document.createElement("div");
    container.classList.add("card");
    container.dataset.card = dataSet;
    return container;
  },
  frontCard: (source, alt) => {
    const frontCard = document.createElement("img");
    frontCard.classList.add("card-front");
    frontCard.src = source;
    frontCard.alt = alt;
    return frontCard;
  },
  backCard: () => {
    const backCard = document.createElement("img");
    backCard.classList.add("card-back");
    backCard.src =
      "https://preview.redd.it/qnnotlcehu731.jpg?auto=webp&s=55d9e57e829608fc8e632eb2e4165d816288177c";
    backCard.alt = "Dos d'une carte Magic the gathering";
    return backCard;
  },
};

export { card };
