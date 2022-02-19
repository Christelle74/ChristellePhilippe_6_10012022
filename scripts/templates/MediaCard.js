import { likesArray, likesIncrement } from "../utils/likes.js";
import { mediaSort } from "../utils/dropDown.js";

const mediasContainer = document.querySelector(".galleryContainer");
//console.log(medias);//dans la console fait apparaitre l'array de tous les medias

const displayGallery = async () => {
  await fetchMedias();

  //recherche de l'id du photographe dans l'url-----------
  const idPhotographer = window.location.search.slice(4);
  //console.log(idPhotographer);

  //recherche des medias par photographe d'après son id -----------------------------------
  const PhotographerMedias = medias.filter(
    (media) => media.photographerId === parseInt(idPhotographer)
  );
  console.log(PhotographerMedias); //array des medias du photographe

  //création pour chaque médias de l'élément Html "article"
  PhotographerMedias.forEach((media) => {
    let card = document.createElement("article");
    mediasContainer.appendChild(card);
    //console.log(card);

    //recupération de la mediaFactory sans le mot cle new (fonction static)
    let Template = mediaFactory.createMediaCard(media);
    card.innerHTML = Template.createMediaCard();
    //console.log(Template); //affiche dans la console chaque média
  });

  mediaSort(PhotographerMedias);

  //récupération fonction likesIncrement
  likesIncrement(PhotographerMedias);

  //lightbox , récupération des médias à afficher dans la lightbox
  let lightbox = new Lightbox(PhotographerMedias);
  //console.log(lightbox); //retourne l'array des médias

  let links = document.querySelectorAll("#mediaLink");
  //console.log(links);

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      lightbox.show(e.currentTarget.dataset.id);
    });
  });
};

displayGallery();
