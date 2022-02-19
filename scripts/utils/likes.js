/**
 * gestion des likes des medias
 * recupération des elements dom
 * forEach = recupération des likes par la propriété like des medias
 * likesArray.push : on met le nbre de likes dans un tableau vide (reduits en en seul nombre)
 * on injecte ce nombre dans le footer du photographe (textcontent)
 * for + addeventlistner : pour chaque click ecouté on incremente les compteurs de 1
 */

let likesArray = [];

function likesIncrement(PhotographerMedias) {
  const pLikesSum = document.querySelector("#total_likes");
  //console.log(pLikesSum);
  const mediaCounterLikes = document.querySelectorAll("#like-number");
  //console.log(mediaCounterLikes);
  const likeHeart = document.querySelectorAll("#heart");
  //console.log(likeHeart);

  PhotographerMedias.forEach((media) => {
    let mediaLikesTextContent = media.likes;
    // console.log(mediaLikesTextContent);

    likesArray.push(mediaLikesTextContent);
    const likesSum = likesArray.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    // console.log(likesSum);

    pLikesSum.textContent = likesSum;
  });

  for (let i = 0; i < likeHeart.length; i++) {
    likeHeart[i].addEventListener("click", () => {
      mediaCounterLikes[i].textContent =
        parseInt(mediaCounterLikes[i].textContent) + 1;
      pLikesSum.textContent = parseInt(pLikesSum.textContent) + 1;
    });
  }
}

export { likesArray, likesIncrement };
