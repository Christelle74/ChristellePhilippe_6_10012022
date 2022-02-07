//Mettre le code JavaScript lié à la page photographer.html

const photographerProfilContainer =
  document.querySelector(".photograph-header");
//console.log(photographerProfilContainer);

const photographerProfilDisplay = async () => {
  await fetchPhotographers(); // on va chercher les données de la fetchApi medias

  //recherche des photographes par leur id et affichage du profil-------------
  const photographer = photographers.find(
    (photographer) => photographer.id === parseInt(id)
  );
  //console.log(photographer);
  //console.log(photographer.id);

  const photographerProfil = `
  <div class="photograph-profil">
      <div  class="photograph_details" role="text" >
          <h2>${photographer.name}</h1>
          <p class="photograph_city">${photographer.city}, ${photographer.country}</p>
          <p class="photograp_tag">${photographer.tagline}</p>
      </div>
  
      <button id="contact" class="contact_button" onclick="launchModal()">Contactez-moi</button>
  
  
      <div>
      <img class="photograph_picture" src="./assets/photographers/${photographer.portrait}" aria-label="${photographer.alt}" alt="${photographer.alt}">
      </div>
  </div>
      <div class="tri"> 
          <label class= "dropbox" for="trier">Trier par</label>
          <select class="btn-select" name="select" id="select">
              <option value="popularité">Popularité</option>
              <option value="date">Date</option>
              <option value="titre">Titre</option>
          </select>
      </div> 
  
    `;

  if (photographer) {
    photographerProfilContainer.innerHTML = photographerProfil;
  }
};

photographerProfilDisplay();

/*const photographerProfilContainer =
  document.querySelector(".photograph-header");
//console.log(photographerProfilContainer);

const galleryContainer = document.querySelector(".container");
console.log(galleryContainer);

const urlSearch = new URLSearchParams(window.location.search);
const id = urlSearch.get("id");
//console.log(id);

fetch("/data/photographers.json")
  .then((resp) => resp.json())
  .then((data) => {
    //recherche des photographes--------------------------
    const photographers = data.photographers;
    //console.log(photographers);

    //recherche des photographes par leur id et affichage du profil-------------
    const currentPhotographer = photographers.find(
      (photographer) => photographer.id === parseInt(id)
    );
    console.log(currentPhotographer);

    if (currentPhotographer) {
      photographerProfilContainer.innerHTML = new PhotographerCard(
        currentPhotographer
      ).getPhotographerProfilCard();
    }

    //recherche des medias------------------------------
    const medias = data.media;
    console.log(medias);

    //recherche des medias par photographe -----------------------------------
    const currentMedia = medias.filter(
      (media) => media.photographerId === parseInt(id)
    );
    console.log(currentMedia);

    currentMedia.forEach((media) => {
      galleryContainer.innerHTML += new MediaCard(media).createMediaCard();
    });
  })

  .catch((err) => {
    console.log(err);
  });*/
