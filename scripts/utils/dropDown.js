import { genMediaArticle } from "../templates/MediaCard.js";

/**
 *filtrage des medias par le dropdown /select /option
 *
 *
 *
 *
 * */

export function mediaSort(PhotographerMedias) {
  //  const filters = document.querySelectorAll("#selection option");
  var selectBox = document.getElementById("selection");
  //  console.log(filters);

  selectBox.addEventListener("change", (event) => {
    if (event.target.value === "popularite") {
      PhotographerMedias.sort(function (a, b) {
        console.log(event.target.value);
        return b.likes - a.likes;
      });
    } else if (event.target.value === "date") {
      PhotographerMedias.sort(function (a, b) {
        console.log(event.target.value);
        return new Date(b.date) - new Date(a.date);
      });
    } else if (event.target.value === "titre") {
      PhotographerMedias.sort(function (a, b) {
        console.log(event.target.value);
        return a.title.localeCompare(b.title);
      });
    } else {
      PhotographerMedias.sort((a, b) => {
        console.log(event.target.value);
        return b.likes - a.likes;
      });
    }
    console.log(event.target.value);

    const mediasContainer = document.querySelector(".galleryContainer");
    // console.log(mediasContainer.childNodes.length );

    // On enleve tous les articles précédemment créés
    mediasContainer.innerHTML = "";

    // On regenère chaque médias de l'élément Html "article" avec le PhotographerMedias nouvellement trié
    genMediaArticle(PhotographerMedias);
  });
}
