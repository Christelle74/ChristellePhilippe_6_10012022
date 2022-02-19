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
