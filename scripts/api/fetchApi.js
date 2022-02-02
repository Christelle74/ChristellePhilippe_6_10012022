let photographers = [];
let medias = [];

const urlSearch = new URLSearchParams(window.location.search);
const id = urlSearch.get("id");
//console.log(id);

const fetchPhotographers = async () => {
  await fetch("data/photographers.json")
    .then((res) => res.json())
    .then((data) => (photographers = data.photographers));
  //.then(() => console.log(userData));
  // console.log(photographers);
};

const fetchMedias = async () => {
  await fetch("data/photographers.json")
    .then((res) => res.json())
    .then((data) => {
      medias = data.media;
      //console.log(medias);

      //recherche des medias par photographe -----------------------------------
      let currentPhotographerMedia = medias.filter(
        (media) => media.photographerId === parseInt(id)
      );
      console.log(currentPhotographerMedia);
    });
};
