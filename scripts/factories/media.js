class Media {
  constructor(data) {
    this._id = data.id;
    this._photographer = { id: data.photographerId };
    this._title = data.title;
    this._alt = data.alt;
    this._likes = data.likes;
    this._date = data.date;
    this._price = data.price;
    this._type = "media";
  }
}
/*const exemple = { title: "blabla", price: "50€" };
const mediaExemple = new Media(exemple);
console.log(mediaExemple);*/

class MediaImage extends Media {
  constructor(data) {
    super(data);
    this._image = data.image;
    this._type = "image";
  }
  createMediaCard() {
    return `
        <figure class="media">
            <div  class="image">
                <img  src="/assets/images/ ${this._photographer},${this._image},${this._alt},${this._title}></img>
            </div>
            <figcaption class="details">
                <h2 class="titre">${this._title}</h2>
                <div class="likes">
                    <p class="like-coeur">${this._likes}</p>
                    <span data-id="${this._id}" class="heart"> <i class="fas fa-heart"></i></span>
                </div>
            </figcaption>
        </figure>`;
  }
}

/*const exemple = { title: "blabla", price: "50€" };
const mediaExemple = new MediaImage(exemple);
console.log(mediaExemple);*/

class MediaVideo extends Media {
  constructor(data) {
    super(data);
    this._video = data.video;
    this._type = "video";
  }
  createMediaCard() {
    return `
        <div class="media">
            <video class="video">
                <source src="/assets/images/${this._photographer},${this._video}" type="${this._type},${this._alt},${this._title}">
            </video>
            <div class="details">
                <h2 class="titre">${this._title}</h2>
                <div class="likes">
                    <p class="like-coeur">${this._likes}</p>
                    <span data-id="${this._id}" class="heart"> <i class="fas fa-heart"></i></span>
                </div>
            </div>
        </div>`;
  }
}

/*const exemple = { title: "blabla", price: "50€" };
const mediaExemple = new MediaVideo(exemple);
console.log(mediaExemple);*/

function mediaFactory(data) {
  if (this._type === "image") {
    return new MediaImage(data);
  } else if (this._type === "video") {
    return new MediaVideo(data);
  } else {
    throw "unknown media type";
  }
}
