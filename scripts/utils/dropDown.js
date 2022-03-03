import { displayGallery } from "../templates/MediaCard.js";

/**
 *filtrage des medias par le dropdown /select /option avec méthode sort
 *
 */

export function mediaSort(PhotographerMedias) {
  const selectBox = document.getElementById("selection");

  // console.log(select;

  selectBox.addEventListener("change", (event) => {
    if (event.target.value === "popularite") {
      PhotographerMedias.sort(function (a, b) {
        return b.likes - a.likes;
      });
    } else if (event.target.value === "date") {
      PhotographerMedias.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
      });
    } else if (event.target.value === "titre") {
      PhotographerMedias.sort(function (a, b) {
        return a.title.localeCompare(b.title);
      });
    } else {
      PhotographerMedias.sort((a, b) => {
        return b.likes - a.likes;
      });
    }
    //console.log(event.target.value);

    const mediasContainer = document.querySelector(".galleryContainer");
    //console.log(mediasContainer.childNodes.length); //renvoi le nombre de médias affichés

    // On vide le container galerie
    mediasContainer.innerHTML = "";
    // On regenère chaque médias de l'élément Html "article" avec le PhotographerMedias nouvellement trié
    displayGallery(PhotographerMedias);
  });
}
