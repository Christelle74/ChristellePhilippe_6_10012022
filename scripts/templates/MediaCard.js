const mediaDisplay = async () => {
  //async function getMedias() {
  await fetchMedias();
  //console.log(medias); //dans la console fait apparaitre l'array des medias

  //recherche de l'id du photographe dans l'url-----------
  const idPhotographer = window.location.search.slice(4);
  console.log(idPhotographer);

  //displayGallery(PhotographerMedias);
};

const displayGallery = async () => {
  await mediaDisplay();
  const mediasContainer = document.querySelector(".galleryContainer");
  console.log(mediasContainer);

  //recherche des medias par photographe -----------------------------------
  const PhotographerMedias = medias.filter(
    (media) => media.photographerId === parseInt(id)
  );
  console.log(PhotographerMedias);

  /* mediasContainer.innerHTML = PhotographerMedias.map(
    (media) => `
    <figure class="media">
    <div  class="image">
        <img  src="./assets/images/${media.photographerId}/${media.image}" alt="${media.title}"></img>
    </div>
    <figcaption class="details">
        <h2 class="titre">${media.title}</h2>
        <div class="likes">
            <p class="like-coeur">${media.likes}</p>
            <span data-id="${media.id}" class="heart"> <i class="fas fa-heart"></i></span>
        </div>
    </figcaption>
</figure>`
  ).join("");*/

  medias.forEach((media) => {
    const Template = new mediaFactory(media);
    console.log(Template);

    mediasContainer.innerHTML = Template.createMediaCard();
  });
};

displayGallery();
