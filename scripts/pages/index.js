/*global photographers, fetchPhotographers*/
/*eslint no-undef: "error"*/

/**
 * page d'accueil du site, on récupère  les données des photographes en appelant la fetch
 * dispatching des données (map), et fabrication du gabarit Html des medaillons photographes
 */

const photographersIndexContainer = document.querySelector(
  ".photographer_section"
);
//console.log(photographersIndexContainer);

const photographersDisplay = async () => {
  await fetchPhotographers(); // on va chercher les données de la fetchApi photographers

  photographersIndexContainer.innerHTML = photographers
    .map(
      (photographer) =>
        ` 
  <article tabindex="0"  aria-label="photographe ${photographer.name}">
    <a  href="./photographer.html?id=${photographer.id}">
      <div >
        <img   class="photographer_picture" src="./assets/images/PhotographersIDPhotos/${photographer.portrait}" alt="${photographer.name}">
        <h2 aria-label="nom du photographe">${photographer.name}</h2>
      </div>
    </a>
    <p class="photographer_city" aria-label="sa localisation">${photographer.city}, ${photographer.country}</p>
    <p class="photographer_tag" aria-label="son slogan">${photographer.tagline}</p>
    <p class="photographer_price" aria-label="ses tarifs">${photographer.price}€/jour</p>
    
  </article>`
    )
    .join("");
};

photographersDisplay();
