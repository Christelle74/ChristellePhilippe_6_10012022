/*class mediaCard {
  constructor(media) {
    this._media = media;
    this._id = media.id;
    this._photographer = { id: media.photographerId };
    this._title = media.title;
    this._likes = media.likes;
    this._date = media.date;
    this._price = media.price;
    this._type = "media";
  }
}*/

class MediaCardImage /*extends mediaCard*/ {
  constructor(data) {
    //super(media);
    this.id = data.id;
    this.image = data.image;
    this.title = data.title;
    this.photographerId = data.photographerId;
    this.likes = data.likes;
    this.date = data.date;
    this.price = data.price;
    this.type = "image";
  }

  createMediaCard() {
    return `
        <figure class="media">
            <div  class="image">
                <img  src="./assets/images/${this.photographerId}/${this.image}" alt="${this.title}"></img>
            </div>
            <figcaption class="details">
                <h2 class="titre">${this.title}</h2>
                <div class="likes">
                    <p class="like-coeur">${this.likes}</p>
                    <span data-id="${this.id}" class="heart"> <i class="fas fa-heart"></i></span>
                </div>
            </figcaption>
        </figure>`;
  }
}

/*const exemple = { title: "blabla", price: "50€" };
const mediaExemple = new MediaImage(exemple);
console.log(mediaExemple);*/

class MediaCardVideo /*extends mediaCard*/ {
  constructor(data) {
    // super(media);
    // this.id = data.id;
    //this.video = data.video;
    this.title = data.title;
    this.photographerId = data.photographerId;
    this.likes = data.likes;
    this.date = data.date;
    this.price = data.price;
    this.type = "video";
  }
  createMediaCard() {
    return `
        <div class="media">
            <video class="video">
                <source src="./assets/images/${this.photographerId}/${this.video}"  alt="${this.title}">
            </video>
            <div class="details">
                <h2 class="titre">${this.title}</h2>
                <div class="likes">
                    <p class="like-coeur">${this.likes}</p>
                    <span data-id="${this.id}" class="heart"> <i class="fas fa-heart"></i></span>
                </div>
            </div>
        </div>`;
  }
}

class mediaFactory {
  constructor(type, data) {
    if (type === "image") {
      return new MediaCardImage(data);
    } else {
      type === "video";
      return new MediaCardVideo(data);
    }
  }
}
