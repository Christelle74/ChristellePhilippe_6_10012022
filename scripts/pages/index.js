async function getPhotographers() {
  // on récupère le tableau de données dans le json par le fetch
  let photographers = [];

  await fetch("./data/photographers.json")
    .then((res) => res.json())
    .then((data) => {
      photographers = data.photographers;
      //console.log(data);
    });
  return {
    photographers,
  };
  // et bien retourner le tableau photographers seulement une fois

  /* return {
       photographers: [...photographers, ...photographers, ...photographers],
      };*/
}

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
