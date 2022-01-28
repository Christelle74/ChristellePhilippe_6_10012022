//Mettre le code JavaScript lié à la page photographer.html

const photographerProfilContainer =
  document.querySelector(".photograph-header");
//console.log(photographerProfilContainer);

const urlSearch = new URLSearchParams(window.location.search);
const id = urlSearch.get("id");
//console.log(id);

fetch("/data/photographers.json")
  .then((resp) => resp.json())
  .then((data) => {
    //recherche des photographes--------------------------
    const photographers = data.photographers;
    //console.log(photographers);

    //recherche des phptpgraphes par leur id et affichage du profil-------------
    const currentPhotographer = photographers.find(
      (photographer) => photographer.id === parseInt(id)
    );
    //console.log(currentPhotographer)

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
  })
  .catch((err) => {
    console.log(err);
  });
