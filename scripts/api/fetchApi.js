/**
 * récupération des données photographes et médias par les fetch
 */

const fetchPhotographers = async () => {
  await fetch("data/photographers.json")
    .then((res) => res.json())
    .then((data) => {
      // eslint-disable-next-line no-undef
      photographers = data.photographers;
    });
  //.then(() => console.log(userData));
  // console.log(photographers);
};

const fetchMedias = async () => {
  await fetch("data/photographers.json")
    .then((res) => res.json())
    .then((data) => {
      // eslint-disable-next-line no-undef
      medias = data.media;
      //console.log(medias);
    });
};
