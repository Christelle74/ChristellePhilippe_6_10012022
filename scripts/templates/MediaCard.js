import { likesIncrement } from "../utils/likes.js";
import { Lightbox } from "../utils/lightbox.js";
import { MediaFactory } from "../factories/media.js";

/*global medias, fetchMedias*/
/*eslint no-undef: "error"*/

/**
 * création de la galerie photos et gestion des likes, du tri et de la lightbox
 *  (gallery) récupération des medias via l'appel de la fetch et filtre par photographe + appel de displayGallery et mediaSort(tri)
 *  (displayGallery) costruction de la galerie photos avec récupération de la factory des medias
 *  avec rappel de fonctions des likes et de la lightbox
 */

const mediasContainer = document.querySelector(".galleryContainer");
//console.log(medias);//dans la console fait apparaitre l'array de tous les medias

//tableau vide des medias qu'on remplira suivant la fonction utilisée (tri, galerie)
var PhotographerMedias = [];

const Gallery = async () => {
  await fetchMedias();

  //recherche de l'id du photographe dans l'url, slice méthode pour obtenir seulement l'id du photographe
  const idPhotographer = window.location.search.slice(4);
  //console.log(idPhotographer);

  //recherche des medias par photographe d'après son id
  PhotographerMedias = medias.filter(
    (media) => media.photographerId === parseInt(idPhotographer)
  );
  //console.log(PhotographerMedias); //tableau  des medias du photographe

  //rappel de la fonction displayGallery ci-dessous, qui met en place les medias dans la galerie
  displayGallery();
};

//gestion du tri des medias avec la methode sort
function mediaSort() {
  const selectBox = document.getElementById("selection");

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
    //rappel de la fonction displayGallery pour re-régénérer les medias selon le tri
    displayGallery();
    //console.log(event.target.value);
  });
}

Gallery();

function displayGallery() {
  //console.log(PhotographerMedias);

  // On vide le container galerie avant de pouvoir l'alimenter lors des tris par exemple
  mediasContainer.innerHTML = "";

  PhotographerMedias.forEach((media) => {
    //création pour chaque médias de l'élément Html "article"
    let card = document.createElement("article");
    mediasContainer.appendChild(card);
    //console.log(card);

    //recupération de la mediaFactory sans le mot cle new (fonction static)
    let Template = MediaFactory.createMediaCard(media);
    card.innerHTML = Template.createMediaCard();
    //console.log(Template); //affiche dans la console chaque média
  });

  //rappel de la fonction des likes
  likesIncrement(PhotographerMedias);

  //lightbox , récupération des médias à afficher dans la lightbox
  let lightbox = new Lightbox(PhotographerMedias);
  // console.log(lightbox); //retourne l'array des médias

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

  mediaSort();
}
