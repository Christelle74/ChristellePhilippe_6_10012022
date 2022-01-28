const photographersIndexContainer = document.querySelector(
  ".photographer_section"
);
console.log(photographersIndexContainer);

fetch("/data/photographers.json")
  .then((resp) => resp.json())
  .then((data) => {
    let Photographers = data.photographers;
    console.log(Photographers);

    photographersIndexContainer.innerHTML = Photographers.map((photographer) =>
      new PhotographerCard(photographer).getPhotographerIndexCard()
    ).join("");
  })
  .catch((err) => {
    console.log(err);
  });

/*async function getPhotographers() {
  // on récupère le tableau de données dans le json par le fetch
  let photographers = [];

  await fetch("./data/photographers.json")
    .then((res) => res.json())
    .then((data) => {
      photographers = data.photographers;
      //console.log(data);
    });
  console.log(photographers);
  return {
    photographers,
  };
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

init();*/
