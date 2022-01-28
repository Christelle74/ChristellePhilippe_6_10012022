const galerySection = document.createElement("div");
galerySection.classList.add("container");
main.appendChild(galerySection);
console.log(galerySection);

class MediaCard {
  constructor(media) {
    this._media = media;
  }

  createMediaCard() {
    galerySection.innerHTML = createMediaCard.map(media);

    return `
      <div class="photo">${this._media},${this._photographerId},${this._media.id}
        <div role ="figure" class="image">
          <img  src="/assets/images/${this._photographerId},${this._media.id},${this._media.image} alt="${this._media.title}";
          " >
        </div>
        <div class="details">
          <h2 class="titre">${this._media.title}</h2>
          <div class="likes">
            <p class="like-coeur">${this._media.likes}</p>
            <span class="heart"> <i class="fas fa-heart"></i></span>
          </div>
        </div>
      </div>
    `;
  }
}
