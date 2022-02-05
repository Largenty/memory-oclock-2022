const get = {
  allByClass: (className) => document.querySelectorAll(className),
  byId: (idName) => document.getElementById(idName),

}

export { get };
