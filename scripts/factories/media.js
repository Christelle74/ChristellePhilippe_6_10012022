/**
 * 2 constructors "image" et"video" qui permettent de préparer les gabarits Html de la galerie et de récupérer les datas
 * 1 factory qui permet de prendre en compte les 2 sortes de médias jpg et mp4
 */
class Image {
  constructor(data) {
    this.id = data.id;
    this.image = data.image;
    this.title = data.title;
    this.imgPhotographerId = data.photographerId;
    this.likes = data.likes;
    this.date = data.date;
    this.price = data.price;
  }

  createMediaCard() {
    return `        
        <figure  class="media" >
            <div id="mediaLink" data-id="${this.id}" tabindex="0" >
              <img  aria-label="${this.title}ouvrir en pleine page" role="button" src="./assets/images/${this.imgPhotographerId}/${this.image}" alt="${this.title}" ></img>
            </div>
            <figcaption id="details">
                <h2 id="titre">${this.title}</h2>
                <div id="likes">
                    <p id="like-number">${this.likes}</p>
                    <button   id="heart" aria-label="j'aime"></button>
                </div>
            </figcaption>
        </figure>
      



        <div id="lightbox" tabindex="0" class="lightbox" arial-label="${this.title}" role="dialog" aria-modal="true">
          <button  class="lightbox_close" aria-label="fermer"></button>
          <button  class="lightbox_next" aria-label="media suivant"></button>
          <button  class="lightbox_prev" aria-label="media precedent"></button>
          <div  class="lightbox_container"  data-id="${this.id}">
            <img  role="img" id="imgBox" src="./assets/images/${this.imgPhotographerId}/${this.image}" alt="${this.title}" aria-label="${this.title}"></img>
            <p class="titleCurrentImg">${this.title}</p>
          </div>
      </div>
         
        `;
  }
}

class Video {
  constructor(data) {
    this.id = data.id;
    this.video = data.video;
    this.title = data.title;
    this.videoPhotographerId = data.photographerId;
    this.likes = data.likes;
    this.date = data.date;
    this.price = data.price;
  }
  createMediaCard() {
    return `
        <figure class="media" >
          <div id="mediaLink" data-id="${this.id}" tabindex="0" >
            <video  aria-label="${this.title}ouvrir en pleine page" role="button"  src="./assets/images/${this.videoPhotographerId}/${this.video}"  alt="${this.title}" type="video/mp4" ></video>
          </div>
              
            <div id="details">
                <h2 id="titre">${this.title}</h2>
                <div id="likes">
                    <p id="like-number">${this.likes}</p>
                    <button aria-label="j'aime" id="heart"></button>
                </div>
            </div>
        </figure>
      
      
      
      <div  class="lightbox " arial-label="${this.title}" tabindex="0" role="dialog" aria-modal="true">
        <button  class="lightbox_close" aria-label="fermer"></button>
        <button  class="lightbox_next" aria-label="media suivant"></button>
        <button  class="lightbox_prev" aria-label="media précédent"></button>
        <div  class="lightbox_container" data-id="${this.id}">
          <video  id="imgBox" src="./assets/images/${this.videoPhotographerId}/${this.video}"  alt="${this.title}" aria-label="${this.title}"></video>
          <p class="titleCurrentImg">${this.title}</p>
        </div>
      </div>
       `;
  }
}

/**
 * Factory : pas besoin d'utiliser un "constructor", on peut utiliser une fonction statique
 * retournée dans le fichier MediaCard.js
 */
class MediaFactory {
  static createMediaCard(media) {
    if ("video" in media) {
      return new Video(media);
    } else {
      return new Image(media);
    }
  }
}

export { MediaFactory };
