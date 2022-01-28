// Build the photographers section, call the 'filtertags' function and the 'passer au contenu' button
class PhotographerCard {
  constructor(photographer) {
    this._photographer = photographer;
  }

  //fonction construction page d'accueil
  getPhotographerIndexCard() {
    return `
				<article>
					<a  href="./photographer.html?id=${this._photographer.id}">
						<div role="figure">
							<img class="photographer_picture" src="/assets/photographers/${this._photographer.portrait}" aria-label="${this._photographer.alt} alt="${this._photographer.alt}">
							<h2>${this._photographer.name}</h2>
						</div>
					</a>
					<p class="photographer_city">${this._photographer.city}, ${this._photographer.country}</p>
					<p class="photographer_tag">${this._photographer.tagline}</p>
					<p class="photographer_price">${this._photographer.price}€/jour</p>
					
				</article>`;
  }

  //fonction construction page profil photographe
  getPhotographerProfilCard() {
    return `
    <div role="text" class="photograph_profil">
        <h2>${this._photographer.name}</h1>
        <p class="photograph_city">${this._photographer.city}, ${this._photographer.country}</p>
        <p class="photograp_tag">${this._photographer.tagline}</p>
    </div>

    <button class="contact_button" onclick="displayModal()">Contactez-moi</button>


    <div>
    <img class="photograph_picture" src="/assets/photographers/${this._photographer.portrait}" aria-label="${this._photographer.alt}" alt="${this._photographer.alt}">
    </div>


    <label for="trier">Trier par</label>
    <select class="btn-select" name="select" id="select">
        <option value="popularité">Popularité</option>
        <option value="date">Date</option>
        <option value="titre">Titre</option>
    </select>

    `;
  }

  getPhotographerName() {
    return `
				<h2>Contacter <br> ${this._photographer.name}</h2>
		`;
  }
}

/*
//creation du profil photographe sur la page photographer
function photographerProfilFactory(data) {
  const { name, portrait, city, country, tagline, id } = data;
  const picture = `assets/photographers/${portrait}`;

  function getUserProfilCardDOM() {
    let photographHeader = document.querySelector(".photograph-header");

    //construction de la partie profil dans une div-nom, lieu, tag
    const div = document.createElement("div");
    div.setAttribute("id", "photograph_profil");
    //console.log(div);

    const h1 = document.createElement("h1");
    h1.classList.add("photograph_name");
    h1.textContent = name;
    //console.log(h1);

    const villePays = document.createElement("h2");
    villePays.classList.add("photograph_villePays");
    villePays.textContent = city + ", " + country;
    //console.log(villePays);

    const tag = document.createElement("p");
    tag.classList.add("photograph_tag");
    tag.textContent = tagline;
    //console.log(tag);

    //construction du bouton contact--------------------------
    const contactButton = document.createElement("button");
    contactButton.classList.add("contact_button");
    contactButton.setAttribute("onclick", "displayModal()");
    contactButton.textContent = "Contactez-moi";
    //console.log(contactButton);

    //construction de la partie photo de profil--------
    const profilImg = document.createElement("img");
    profilImg.classList.add("photograph_picture");
    profilImg.setAttribute("src", picture);
    //console.log(profilImg);

//construction du dropdown-------------------------
    const labelTri = document.createElement("label");
    labelTri.setAttribute("for", "trier");
    labelTri.innerHTML = "Trier par";
    //console.log(labelTri);

    const dropDown = document.createElement("select");
    dropDown.classList.add("btn-select");
    //console.log(dropDown);

    const dropDownOption1 = document.createElement("option");
    dropDownOption1.setAttribute("value", "popularité");
    dropDownOption1.innerHTML = "Popularité";
    const dropDownOption2 = document.createElement("option");
    dropDownOption2.setAttribute("value", "date");
    dropDownOption2.innerHTML = "Date";
    const dropDownOption3 = document.createElement("option");
    dropDownOption3.setAttribute("value", "titre");
    dropDownOption3.innerHTML = "Titre";

    photographHeader.appendChild(div);
    photographHeader.appendChild(contactButton);
    photographHeader.appendChild(profilImg);
    main.appendChild(labelTri);
    main.appendChild(dropDown);
    dropDown.appendChild(dropDownOption1);
    dropDown.appendChild(dropDownOption2);
    dropDown.appendChild(dropDownOption3);
    div.appendChild(h1);
    div.appendChild(villePays);
    div.appendChild(tag);

    return photographHeader, div, contactButton, profilImg, labelTri, dropDown;
  }

  return {
    name,
    picture,
    city,
    country,
    tagline,
    id,
    getUserProfilCardDOM,
  };
}*/
