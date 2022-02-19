class Lightbox {
  constructor(listMedias) {
    this.currentMedia = null;
    this.listMedias = listMedias; //avoir la liste et pouvoir récupérer le précédent et le suivant
    this.manageEvent();
  }

  //afficher la modale lors de l'appel d'un media et appelle la fonction display
  show(id) {
    this.currentMedia = this.getElementById(id);
    //erreur le current media ne renvoie pas le detail du media(voir debogueur)
    console.log(id); //renvoie bien l'id de la photo au clic
    this.display();
  }

  //afficher le prochain média
  //si on arrive en fin de tableau des medias on repart au début.
  next() {
    //on récupère l'index de l'élément en cours dans le tableau (findIndex)
    const index = this.listMedias.findIndex(
      (element) => element.id == this.currentMedia.id
    );
    if (index == this.listMedias.length - 1) {
      //si on arrive sur le dernier index du tableau
      this.currentMedia = this.listMedias[0]; //on repart au debut du tableau
    } else {
      this.currentMedia = this.listMedias[index + 1];
    }
    console.log(index);
    this.display();
  }

  //afficher les médias précédents
  //si on arrive au début de tableau, on repart sur le dernier média
  previous() {
    const index = this.listMedias.findIndex(
      (element) => element.id == this.currentMedia.id
    );
    if (index == 0) {
      //si on est sur le 1er element du tableau
      this.currentMedia = this.listMedias[this.listMedias.length - 1]; //on repart de la fin du tableau
    } else {
      this.currentMedia = this.listMedias[index - 1];
    }
    console.log(index);
    this.display();
  }

  //paramètre les events sur les boutons, fonction flechées obligatoires pour que this. fasse bien référence  à la classe ou on se trouve
  manageEvent() {
    const nextImg = document.querySelector(".lightbox_next");
    nextImg.addEventListener("click", () => {
      this.next(); //appelle la fonction next()
    });
    //console.log(nextImg); //renvoie le bouton next

    const prevImg = document.querySelector(".lightbox_prev");
    prevImg.addEventListener("click", () => {
      this.previous(); //appelle la fonction previous()
    });
    //console.log(prevImg);//renvoie le bouton prev

    const closeBtn = document.querySelector(".lightbox_close");
    closeBtn.addEventListener("click", () => {
      this.close(); //appelle la fonction close()
    });
    //console.log(closeBtn);//renvoie le bouton x
  }

  //recherche dans la liste l'élement dont l'id et égale à l'id passé en paramètre
  getElementById(id) {
    return this.listMedias.find((media) => media.id == id);
  }

  //affiche le media dans le src et injecte "show" dans la lightbox pour que la modale s'ouvre
  display() {
    const container = document.querySelector(".lightbox_container");
    //console.log(container);
    if (this.currentMedia.image) {
      container.innerHTML =
        '<p> <img id="imgBox" src="./assets/images/' +
        this.currentMedia.photographerId +
        "/" +
        this.currentMedia.image +
        '" alt="Lonesome"><p class="titleCurrentImg">' +
        this.currentMedia.title +
        "</p>";
    } else {
      container.innerHTML =
        '<p> <video id="imgBox" src="./assets/images/' +
        this.currentMedia.photographerId +
        "/" +
        this.currentMedia.video +
        '" alt="Lonesome"><p class="titleCurrentImg">' +
        this.currentMedia.title +
        "</p>";
      //alert("je sais pas faire !");
    }

    document.querySelector(".lightbox").classList.add("show");
  }

  //fermeture de la modale par la croix
  close() {
    document.querySelector(".lightbox").classList.remove("show");
  }
}
