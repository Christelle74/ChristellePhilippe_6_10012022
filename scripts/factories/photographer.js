function photographerFactory(data) {
  const { name, portrait, city, country, tagline, price } = data;

  const picture = `assets/photographers/${portrait}`;

  //creation des cartes photographes sur la page d'accueil
  function getUserCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    img.setAttribute("src", picture);

    const h2 = document.createElement("h2");
    h2.textContent = name;

    const villePays = document.createElement("p");
    villePays.classList.add("villePays");
    villePays.textContent = city + ", " + country;

    const tag = document.createElement("p");
    tag.classList.add("tag");
    tag.textContent = tagline;

    const prix = document.createElement("p");
    prix.classList.add("prix");
    prix.textContent = price + "€/jour";

    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(villePays);
    article.appendChild(tag);
    article.appendChild(prix);

    return article;
  }
  return { name, picture, city, country, tagline, price, getUserCardDOM };
}
