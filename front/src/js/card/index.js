import { dataImgs } from "./dataImgs";

// Ici, on retrouvera tout ce qui peut être relatif à la création d'une carte.

const card = {
  // cette fonction permet de créer toutes les cartes suivant les data dans dataImgs.
  createCards: () => {
    // pour chaque object dans notre tableau
    dataImgs.forEach((dataImage) => {
      const { source, alt, dataSet } = dataImage;
      // on va créer le container
      const container = card.cardContainer(dataSet);
      // on va créer la face avant de la carte
      const frontCard = card.frontCard(source, alt);
      // on va créer la face arrière de la carte
      const backCard = card.backCard();
      // on récupère la div qui va contenir toutes les cartes
      const cardsContainerDOM =
        document.getElementsByClassName("card-container");
      // on donne le container à la div
      cardsContainerDOM[0].appendChild(container);
      // on rajoute la face avant
      container.appendChild(frontCard);
      // on rajoute la face arrière
      container.appendChild(backCard);
    });
  },
  // cette fonction permet de créer la div qui va contenir la face avant et arrière.
  cardContainer: (dataSet) => {
    // on crée la div
    const container = document.createElement("div");
    // on rajoute la class
    container.classList.add("card");
    // on rajoute les dataset qui nous serons utile pour savoir s'il y a un match ou non
    container.dataset.card = dataSet;
    return container;
  },

  // cette fonction permet de créer la face avant de la carte
  frontCard: (source, alt) => {
    // on crée une image
    const frontCard = document.createElement("img");
    // on ajoute la class
    frontCard.classList.add("card-front");
    // on ajoute la source
    frontCard.src = source;
    // on ajoute le texte alternatif
    frontCard.alt = alt;
    return frontCard;
  },

  // cette fonction permet de créer la face avant de la carte
  backCard: () => {
    // on crée une image
    const backCard = document.createElement("img");
    // on ajoute la class
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
