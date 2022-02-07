class Lightbox {
  //methode statique
  static init() {
    const links = document
      .querySelectorAll('a[href$=".jpg"], a[href$=".mp4"] ') //selection de tous les liens
      .forEach((link) =>
        link.addEventListener("click", (e) => {
          //parcours de chaque lien et ecoute
          e.preventDefault(); //stop le comportement par défaut
          new Lightbox(e.currentTarget.getAttribut("href")); //récupère le lien de l'image cliquée
        })
      );
  }

  /**
   *
   * @param {string} url url du media
   */
  constructor(url) {
    const element = this.buildDom(url);
    document.body.appendChild(element);
  }

  /**
   *
   * @param {string} url url du media
   * @return {HTMLElement}
   */
  buildDom(url) {
    const dom = document.createElement("div");
    dom.classList.add("lightbox");
    dom.innerHTML = `
    <button class="lightbox_close">Fermer</button>
    <button class="lightbox_next">Suivant</button>
    <button class="lightbox_prev">Précédent</button>
    <div class="lightbox_container"></div>
`;
    return dom;
  }
}

Lightbox.init();
