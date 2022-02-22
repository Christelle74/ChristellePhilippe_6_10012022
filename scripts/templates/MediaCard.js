import { likesArray, likesIncrement } from "../utils/likes.js";
import { mediaSort } from "../utils/dropDown.js";

/**
 * création de la galerie photos et gestion des likes, du tri et de la lightbox
 *  (gallery) récupération des medias via l'appel de la fetch et filtre par photographe + appel de displayGallery et mediaSort(tri)
 *  (displayGallery) costruction de la galerie photos avec récupération de la factory des medias
 *  avec rappel de fonctions des likes et de la lightbox
 */

const mediasContainer = document.querySelector(".galleryContainer");
//console.log(medias);//dans la console fait apparaitre l'array de tous les medias

const Gallery = async () => {
  await fetchMedias();

  //recherche de l'id du photographe dans l'url-----------
  const idPhotographer = window.location.search.slice(4);
  //console.log(idPhotographer);

  //recherche des medias par photographe d'après son id -----------------------------------
  const PhotographerMedias = medias.filter(
    (media) => media.photographerId === parseInt(idPhotographer)
  );
  console.log(PhotographerMedias); //array des medias du photographe

  //rappel de la fonction displayGallery
  displayGallery(PhotographerMedias);

  //rappel de la fonction des likes
  likesIncrement(PhotographerMedias);

  //rappel de la fonction de tri des medias
  mediaSort(PhotographerMedias);
};

Gallery();

export function displayGallery(PhotographerMedias) {
  PhotographerMedias.forEach((media) => {
    //création pour chaque médias de l'élément Html "article"
    let card = document.createElement("article");
    mediasContainer.appendChild(card);
    //console.log(card);

    //recupération de la mediaFactory sans le mot cle new (fonction static)
    let Template = mediaFactory.createMediaCard(media);
    card.innerHTML = Template.createMediaCard();
    // console.log(Template); //affiche dans la console chaque média
  });

  //likesIncrement(PhotographerMedias); likesIncrement(PhotographerMedias);

  //lightbox , récupération des médias à afficher dans la lightbox
  let lightbox = new Lightbox(PhotographerMedias);
  //console.log(lightbox); //retourne l'array des médias

  let links = document.querySelectorAll("#mediaLink");
  //console.log(links);

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      lightbox.show(e.currentTarget.dataset.id); // on pointe l'id de l'élément cliqué et va afficher la lightbox depuis cet élément
    });
  });
}
