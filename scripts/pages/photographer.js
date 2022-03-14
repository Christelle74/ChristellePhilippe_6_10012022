/*global photographers, fetchPhotographers*/
/*eslint no-undef: "error"*/
/**
 *  page du profil du photographe, on récupère  les données media du photographe en appelant la fetch
 * dispatching des données (map)
 *recherche des photographes par leur id (urlSearchParams) et méthode find
 *fabrication du gabarit de la page profil
 */

const photographerProfilContainer =
  document.querySelector(".photograph-header");
//console.log(photographerProfilContainer);

const photographerProfilDisplay = async () => {
  await fetchPhotographers();

  //recherche des photographes par leur id et affichage du profil-------------
  const urlSearch = new URLSearchParams(window.location.search);
  const photographId = urlSearch.get("id");
  //console.log(photographId);

  const photographer = photographers.find(
    (photographer) => photographer.id === parseInt(photographId)
  );
  //console.log(photographer);
  //console.log(photographer.id);

  // insertion du nom du photographe dans la modale de contact
  const photographeConstactName = document.querySelector(
    "#photographerContactName"
  ); //console.log(photographeConstactName);
  photographeConstactName.innerHTML =
    "Contactez-moi" + "<br/>" + photographer.name;

  //creation du profil du photographe : détails, photo, bouton de contact, dropdown, footer
  const photographerProfil = `
  <div tabindex="0" class="photograph-profil" aria-label="profil du photographe ${photographer.name}">
      <div  class="photograph_details" role="text" >
          <h2>${photographer.name}</h2>
          <h3 class="photograph_city">${photographer.city}, ${photographer.country}</h3>
          <p class="photograp_tag">${photographer.tagline}</p>
      </div>
  
      <button id="openForm"  class="contact_button" onclick="launchModal()"  aria-labelledby="photographerContactName">Contactez-moi</button>
  
      <div>
        <img role="img" class="photograph_picture" src="./assets/images/PhotographersIDPhotos/${photographer.portrait}"  alt=" ${photographer.name}">
      </div>
  </div>


      <div id="tri"> 
          <label class= "dropbox" for="selection"  >Trier par</label>
          <select  class="btn-select" name="select" id="selection"  aria-label="trier par" >
              <option tabindex="0" class="option" value="popularite" aria-current="page">Popularité</option>
              <option disabled>──────────</option>
              <option tabindex="0"  class="option" value="date">Date</option>
              <option disabled>──────────</option>
              <option tabindex="0" class="option" value="titre">Titre</option>
          </select>
      </div> 



  <footer>
      <div class="counter" aria-label="footer" role="contentinfo"> 
          <span id="total_likes">0</span>
          <i class="fas fa-heart"></i>
          <span class="total_prices">${photographer.price} € / jour</span>
      </div> 
  </footer>
  
    `;

  if (photographer) {
    photographerProfilContainer.innerHTML = photographerProfil;
  }
};

photographerProfilDisplay();
