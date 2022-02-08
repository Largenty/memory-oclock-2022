import { dataImgs } from "./dataImgs";

// Ici, on retrouvera tout ce qui peut être relatif à la création d'une carte.

const card = {
  // Cette fonction permet de créer toutes les cartes suivant les data dans dataImgs.
  createCards: () => {
    // On va créer une carte pour chaque objet dans notre tableau
    dataImgs.forEach((dataImage) => {
      const { source, alt, dataSet } = dataImage;
      // on crée le container
      const container = card.cardContainer(dataSet);
      // on crée la face avant de la carte
      const frontCard = card.frontCard(source, alt);
      // on crée la face arrière de la carte
      const backCard = card.backCard();
      // on récupère la div qui va contenir toutes les cartes
      const cardsContainerDOM =
        document.getElementsByClassName("card-container");
      // on donne le container à la div qui va contenir toutes nos cartes
      cardsContainerDOM[0].appendChild(container);
      // on rajoute la face avant
      container.appendChild(frontCard);
      // on rajoute la face arrière
      container.appendChild(backCard);
    });
  },
  // Cette fonction permet de créer la div qui va contenir la face avant et arrière.
  cardContainer: (dataSet) => {
    // on crée la div
    const container = document.createElement("div");
    // on rajoute la classe
    container.classList.add("card");
    // on rajoute les dataset qui nous serons trèèèèès utile pour savoir s'il y a un match ou non
    container.dataset.card = dataSet;
    return container;
  },

  // Cette fonction permet de créer la face avant de la carte
  frontCard: (source, alt) => {
    // on crée une image
    const frontCard = document.createElement("img");
    // on ajoute la classe
    frontCard.classList.add("card-front");
    // on ajoute la source
    frontCard.src = source;
    // on ajoute le texte alternatif
    frontCard.alt = alt;
    return frontCard;
  },

  // Cette fonction permet de créer la face avant de la carte
  backCard: () => {
    // on crée une image
    const backCard = document.createElement("img");
    // on ajoute la classe
    backCard.classList.add("card-back");
    // on ajoute la source
    backCard.src =
      "https://preview.redd.it/qnnotlcehu731.jpg?auto=webp&s=55d9e57e829608fc8e632eb2e4165d816288177c";
    // on ajoute le texte alternatif
    backCard.alt = "Dos d'une carte Magic the gathering";
    return backCard;
  },
};

export { card };
