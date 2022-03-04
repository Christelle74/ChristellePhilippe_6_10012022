/**
 * gestion des likes des medias
 * recupération des elements dom
 * forEach = recupération des likes par la propriété like des medias
 * likesArray.push : on met le nbre de likes dans un tableau vide
 * on injecte ce nombre dans le footer du photographe (textcontent)
 * for + addeventlistner : pour chaque click ecouté on incremente les compteurs de 1
 */

let likesArray = [];

function likesIncrement(PhotographerMedias) {
  const photographLikesSum = document.querySelector("#total_likes");
  //console.log(pLikesSum);
  const mediaCounterLikes = document.querySelectorAll("#like-number");
  //console.log(mediaCounterLikes);
  const likeHeart = document.querySelectorAll("#heart");
  //console.log(likeHeart);

  let somme = 0;

  PhotographerMedias.forEach((media) => {
    let mediaLikesTextContent = media.likes;
    //console.log(mediaLikesTextContent);
    somme = somme + media.likes;
    likesArray.push(mediaLikesTextContent);
  });
  photographLikesSum.textContent = somme;

  for (let i = 0; i < likeHeart.length; i++) {
    likeHeart[i].addEventListener("click", () => {
      //pour chaque clic sur les coeurs
      mediaCounterLikes[i].textContent =
        parseInt(mediaCounterLikes[i].textContent) + 1;
      //on incrémente de 1 le compteur du média
      photographLikesSum.textContent =
        parseInt(photographLikesSum.textContent) + 1;
      //on incrémente de 1 le total des likes du photographe
    });
  }
}

export { likesArray, likesIncrement };
