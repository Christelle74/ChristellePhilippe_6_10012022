class App {
  constructor() {
    this.$mediasWrapper = document.querySelector(".container");
    this.mediasApi = new MediaApi("data/photographers.json");
  }

  async main() {
    // Ici je récupère mes films de mon fichier photographers.json
    const mediasData = await this.mediasApi.getMedias();
    console.log(mediasData);
    mediasData
      // Ici, je transforme mon tableau de données en un tableau de classe Media
      .map((media) => new Media(media))
      .forEach((media) => {
        console.log(media);
        const Template = new MediaCard(media);
        this.$mediasWrapper.appendChild(Template.createMediaCard());
      });
  }
}

const app = new App();
app.main();
