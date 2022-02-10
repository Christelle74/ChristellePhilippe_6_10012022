class Image {
  constructor(data, CounterLikesSubject) {
    this.id = data.id;
    this.image = data.image;
    this.title = data.title;
    this.imgPhotographerId = data.photographerId;
    this.likes = data.likes;
    this.date = data.date;
    this.price = data.price;
    this.CounterLikesSubject = CounterLikesSubject;
  }

  createMediaCard() {
    return `
        <figure class="media">
            <div  class="image">
                <img src="./assets/images/${this.imgPhotographerId}/${this.image}" alt="${this.title}"></img>
            </div>
            <figcaption class="details">
                <h2 class="titre">${this.title}</h2>
                <div class="likes">
                    <p class="like-number">${this.likes}</p>
                    <button data-id="${this.id}" class="heart"><i class="fas fa-heart"></i> </button>
                </div>
            </figcaption>
        </figure>`;
  }
}

class Video {
  constructor(data, CounterLikesSubject) {
    this.id = data.id;
    this.video = data.video;
    this.title = data.title;
    this.videoPhotographerId = data.photographerId;
    this.likes = data.likes;
    this.date = data.date;
    this.price = data.price;
    this.CounterLikesSubject = CounterLikesSubject;
  }
  createMediaCard() {
    return `
        <figure class="media">
            <video class="video">
                <source class="source" src="./assets/images/${this.videoPhotographerId}/${this.video}"  alt="${this.title}">
            </video>
            <div class="details">
                <h2 class="titre">${this.title}</h2>
                <div class="likes">
                    <p class="like-number">${this.likes}</p>
                    <button data-id="${this.id}" class="heart"> <i class="fas fa-heart"></i></button>
                </div>
            </div>
        </figure>`;
  }
}

class mediaFactory {
  constructor(media) {
    if ("video" in media) {
      return new Video(media);
    } else {
      return new Image(media);
    }
  }
}
