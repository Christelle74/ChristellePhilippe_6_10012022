const photographersIndexContainer = document.querySelector(
  ".photographer_section"
);
console.log(photographersIndexContainer);

const photographersDisplay = async () => {
  await fetchPhotographers(); // on va chercher les données de la fetchApi photographers

  photographersIndexContainer.innerHTML = photographers
    .map(
      (photographer) =>
        `
  <article>
    <a  href="./photographer.html?id=${photographer.id}">
      <div role="figure">
        <img class="photographer_picture" src="./assets/photographers/${photographer.portrait}" aria-label="${photographer.alt} alt="${photographer.alt}">
        <h2>${photographer.name}</h2>
      </div>
    </a>
    <p class="photographer_city">${photographer.city}, ${photographer.country}</p>
    <p class="photographer_tag">${photographer.tagline}</p>
    <p class="photographer_price">${photographer.price}€/jour</p>
    
  </article>`
    )
    .join("");
};

photographersDisplay();

/*fetch("./data/photographers.json")
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
  });*/

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
