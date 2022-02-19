//Mettre le code JavaScript lié à la page photographer.html

const photographerProfilContainer =
  document.querySelector(".photograph-header");
//console.log(photographerProfilContainer);

const photographerProfilDisplay = async () => {
  await fetchPhotographers(); // on va chercher les données de la fetchApi medias

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
  );
  //console.log(photographeConstactName);
  photographeConstactName.innerHTML =
    "Contactez-moi" + "<br/>" + photographer.name;

  //creation du profil du photographe : détails, photo, bouton de contact, dropdown, footer
  const photographerProfil = `
  <div class="photograph-profil">
      <div  class="photograph_details" role="text" >
          <h2>${photographer.name}</h1>
          <p class="photograph_city">${photographer.city}, ${photographer.country}</p>
          <p class="photograp_tag">${photographer.tagline}</p>
      </div>
  
      <button id="openForm" class="contact_button" onclick="launchModal()">Contactez-moi</button>
  
  
      <div>
      <img class="photograph_picture" src="./assets/photographers/${photographer.portrait}" aria-label="${photographer.alt}" alt="${photographer.alt}">
      </div>
  </div>


      <div id="tri"> 
          <label class= "dropbox" for="trier">Trier par</label>
          <select class="btn-select" name="select" id="selection">
              <option value="popularite">Popularité</option>
              <option value="date">Date</option>
              <option value="titre">Titre</option>
          </select>
      </div> 



    


  <footer>
      <div class="counter"> 
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
