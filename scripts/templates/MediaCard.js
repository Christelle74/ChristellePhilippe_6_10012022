import { likesIncrement } from "../utils/likes.js";
import { mediaSort } from "../utils/dropDown.js";
import { Lightbox } from "../utils/lightbox.js";
import { MediaFactory } from "../factories/media.js";

/*global fetchMedias, medias,*/
/*eslint no-undef: "error"*/

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
    let Template = MediaFactory.createMediaCard(media);
    card.innerHTML = Template.createMediaCard();
    // console.log(Template); //affiche dans la console chaque média
  });

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

  // ouvrir la lightbox par le clavier toucher entrée
  links.forEach((link) => {
    link.addEventListener("keyup", (e) => {
      const entrer = e.key;

      if (entrer === "Enter") {
        //alert("ok");
        lightbox.show(e.currentTarget.dataset.id);
      } else {
        return;
      }
    });
  });

  // ajouter un focus à tous les éléments de la modale
  const lightboxDiv = document.querySelector("#lightbox");
  console.log(lightboxDiv);
  const focusableElements = 'button,  [tabindex]:not([tabindex="-1"])';

  const firstFocusableElt = lightboxDiv.querySelectorAll(focusableElements)[0]; // pointer le 1er element focusable dans la modale
  console.log(firstFocusableElt);
  const focusableContent = lightboxDiv.querySelectorAll(focusableElements);
  console.log(focusableContent);
  const lastFocusableElement = focusableContent[focusableContent.length - 1]; // pointer le dernier element focusable dans la modale
  console.log(lastFocusableElement);

  document.addEventListener("keydown", function (e) {
    let isTabPressed = e.key === "Tab"; //tabulation

    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey) {
      // si shift + tab en même temps = on revient en arrière sur les éléments focusables
      if (document.activeElement === firstFocusableElt) {
        lastFocusableElement.focus(); // on met le focus sur le dernier élément
        e.preventDefault();
      }
    } else {
      // si tab
      if (document.activeElement === lastFocusableElement) {
        // si le focus etait sur le dernier element alors on revient sur le 1er focusable
        firstFocusableElt.focus(); // on met le focus sur le 1er element
        e.preventDefault();
      }
    }
  });

  firstFocusableElt.focus();
}
