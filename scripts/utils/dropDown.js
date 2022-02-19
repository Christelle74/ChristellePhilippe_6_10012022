/**
 *filtrage des medias par le dropdown /select /option
 *
 *
 *
 *
 * */

function mediaSort(PhotographerMedias) {
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
  });
}

export { mediaSort };
