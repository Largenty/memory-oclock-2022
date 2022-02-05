import { get } from "./utils/get";

let name;
const userName = {
  inputForm: () => {
    const buttonInputDOM = get.byId("name");
    const userNameDivDOM = get.byId("userName");
    const inputDOM = get.byId("input");
    buttonInputDOM.addEventListener("click", () => {
      name = inputDOM.value;
      const newP = document.createElement("p");
      const newUserName = document.createTextNode(name);
      newP.appendChild(newUserName);
      userNameDivDOM.appendChild(newUserName);
      inputDOM.style.display = "none";
      buttonInputDOM.style.display = "none";
    });

    return name;
  },
  get: () => name ?? null,
};

export { userName };
