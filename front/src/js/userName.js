import { get } from "./utils/get";

let name;
const userName = {
  // Cette fonction permet de récupèrer le pseudo que l'utilisateur a tapé dans l'input.
  inputForm: () => {
    const buttonInputDOM = get.byId("name");
    const userNameDivDOM = get.byId("userName");
    const inputDOM = get.byId("input");
    // on ajoute l'event clique sur le bouton
    buttonInputDOM.addEventListener("click", () => {
      // on récupère la valeur dans notre input.
      name = inputDOM.value;
      // si il n'y a pas de pseudo alors on n'enlève pas l'input et le bouton.
      if (name.length === 0) return;
      // on cache l'input et le bouton
      inputDOM.style.display = "none";
      buttonInputDOM.style.display = "none";

      // on crée un nouveau paragraphe
      const newP = document.createElement("p");
      // on crée le text
      const newUserName = document.createTextNode(name);
      // on ajoute le text au nouvel élément.
      newP.appendChild(newUserName);
      // on ajoute cet élément à notre div.
      userNameDivDOM.appendChild(newP);
    });
    return name;
  },
  // Cette fonction permet de retourner le pseudo du joueur ou null (si le joueur n'a rien tapé dans l'input)
  get: () => name ?? null,
};

export { userName };
