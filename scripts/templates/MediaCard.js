const mediasContainer = document.querySelector(".galleryContainer");
//console.log(medias);//dans la console fait apparaitre l'array des medias

const displayGallery = async () => {
  await fetchMedias();

  //recherche de l'id du photographe dans l'url-----------
  const idPhotographer = window.location.search.slice(4);
  //console.log(idPhotographer);

  //recherche des medias par photographe -----------------------------------
  const PhotographerMedias = medias.filter(
    (media) => media.photographerId === parseInt(idPhotographer)
  );
  //console.log(PhotographerMedias); //array des medias du photographe

  PhotographerMedias.forEach((media) => {
    const card = document.createElement("article");
    mediasContainer.appendChild(card);

    const Template = new mediaFactory(media);
    //console.log(Template); //affiche dans la console chaque média

    card.innerHTML = Template.createMediaCard();
  });
};

displayGallery();

/*let Likes = await this.photographesApi.getLikes();
let nbLikeTotal = 0;
Likes.forEach((like) => {
  if (like.photographerId == idURL) {
    nbLikeTotal = nbLikeTotal + like.likes;
  }
});
let LikeTemplate = new PhotographeLike(nbLikeTotal);
this.profilLikes.append(LikeTemplate.createLikesProfil());

/*function displayFooterLikes(idPhotographer) {
  const photographerBody = document.querySelector("body");
  const footerModel = new photographerProfilDisplay(idPhotographer);
  photographerBody.appendChild(footerModel.createCounterFooter());
  totalCuntLikes();
}*/
/*handleLikeButton() {
  const that = this
  
  this.$wrapper
      .querySelector('.heart')
      .addEventListener('click', function() {
          if (this.classList.contains('wished')) {
              this.classList.remove('wished')
              that.WishListSubject.fire('DEC')
          } else {
              this.classList.add('wished')
              that.WishListSubject.fire('INC')
          }
      })
}*/
/*function userReloadLikes() {
  let $totalLikesElements = 
  let likeSum = 0;
  $totalLikesElements.forEach(function (like) {
    let likeUnit = Number(like.textContent);
    likeSum += likeUnit;
  });
  return likeSum;
}*/

/*const mediaLikes = document.querySelectorAll(".heart");
console.log(mediaLikes);
mediaLikes.addEventListener("click", incrementeCounter);

let sumOfLike = 0;
function incrementeCounter() {
  updateDisplayCounts(++sumOfLike);
}

function updateDisplayCounts(like) {
  document.querySelector(".like-coeur").innerHTML = like;
}

/*Voila un code qui devrait marcher :

<script type="text/javascript">
var compteur = 0;
function incremente(){
compteur ++;
document.getElementById("compteur").firstChild.nodeValue = compteur;
}
</script>

<a id="compteur" href="javascript:incremente()">0</a>*/

/*mediaLikes.forEach((like)=> {
  like.addEventListener("click",(e)=> {
    blabla
  })
})*/
