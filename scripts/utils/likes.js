class MediaLikes {
  constructor(CounterLikesSubject) {
    this.CounterLikesSubject = CounterLikesSubject;
    this.likes = document.getElementsByClassName("heart");
    this.likesPerMedia = document.getElementsByClassName("like-number");
    this.totalPhotographerLikes =
      document.getElementsByClassName("total_likes");
  }

  handleLikeButton() {
    const that = this;
    this.likes.addEventListener("click", function () {
      if ("le coeur est deja liked") {
        ("coeur redevient blanc");
        that.CounterLikesSubject.fire("DEC");
      } else {
        ("lecoeur devient rouge");
        that.CounterLikesSubject.fire("INC");
      }
    });
  }
}

class CounterLikesSubject {
  constructor() {
    this._observers = [];
  }
  like(observer) {
    this._observers.push(observer);
  }
  unlike(observer) {
    this._observers = this._observers.filter((obs) => obs !== observer);
  }
  fire(action) {
    this._observers.forEach((observer) => observer.update(action));
  }
}

class LikesCounter {
  constructor() {
    this._count = 0;
    this._totalLikes = document.querySelector(".total_likes");
  }
  update(action) {
    if (action === "INC") {
      this._count += 1;
    } else if (action === "DEC") {
      this._count -= 1;
    } else {
      throw "unknown action";
    }
    this._totalLikes.innerHTML = this._count;
    console.log("action");
  }
}

/*//selection de tous les coeurs
const likes = document.getElementsByClassName("heart");
console.log(likes);

//selection de tous les champs nombre de likes par media
//const likesPerMedia = document.getElementsByClassName("like-number");
//console.log(likesPerMedia);

//selection du champ nombre total de likes du photographe
const totalPhotographerLikes = document.getElementsByClassName("total_likes");
console.log(totalPhotographerLikes);

//calcul des likes
let likesArray = [];
let totalLikes = 0;
for (i = 0; i < likes.length; i++) {
  totalLikes += parseInt(likes[i].innerHTML);
}

likes.addEventListener("click", addOneLike);

function addOneLike() {
  let totalLikes = document.getElementById("like-number").innerHTML++;
  console.log(totalLikes);
  likesPerMedia.textContent++;
  return likesPerMedia;
}*/
