/**
 *  page du profil du photographe, on récupère  les données media du photographe en appelant la fetch
 * dispatching des données (map), et fabrication du gabarit Html
 *
 * recherche des photographes par leur id (urlSearchParams) et méthode fin
 *
 * fabrication du gabarit de la page profil
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
  <div class="photograph-profil"  aria-label="profil du photographe">
      <div  class="photograph_details" role="text" >
          <h2>${photographer.name}</h1>
          <p class="photograph_city">${photographer.city}, ${photographer.country}</p>
          <p class="photograp_tag">${photographer.tagline}</p>
      </div>
  
      <button id="openForm" class="contact_button" onclick="launchModal()"  aria-labelledby="photographerContactName">Contactez-moi</button>
  
  
      <div>
      <img class="photograph_picture" src="./assets/images/PhotographersIDPhotos/${photographer.portrait}" aria-label="${photographer.name}" alt="${photographer.name}">
      </div>
  </div>


  

      <div id="tri" > 
          <label class= "dropbox" for="selection"  aria-label="trier par">Trier par</label>
          <select class="btn-select" name="select" id="selection">
              <option class="option" value="popularite">Popularité</option>
              <option class="option" value="date">Date</option>
              <option class="option" value="titre">Titre</option>
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
