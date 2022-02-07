// DOM Elements : on pointe les éléments du DOM
const firstName = document.querySelector("input[name=first]");
const lastName = document.querySelector("input[name=last]");
const email = document.querySelector("input[name=email]");
const message = document.querySelector("input[name=message]");

const contactButton = document.querySelector("onclick"); //bouton contactez-moi
const contactModal = document.querySelector("#contact_modal"); //corp du formulaire
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".closeModal"); //croix de fermeture
console.log(contactButton);

//const closeModal = document.querySelector("onclick");
//onclick="closeModal()
const submitForm = document.querySelector("validation");
//submitForm.addEventListener("click", globalValidation);

//ouverture du modal via le bouton contactez-moi
//contactButton.addEventListener("click", launchModal);

function launchModal() {
  //const modal = document.getElementById("contact_modal");
  contactModal.style.display = "block";
  let inputs = Array.from(document.querySelectorAll(".input-validate")); //effacer le contour vert des champs
  inputs.forEach((input) => input.classList.remove("input-validate"));
  modal.style.display = "block"; // apparition du corps du formulaire
}

// fermeture du formulaire avec la X
closeModal.addEventListener("click", hideModal);

function hideModal() {
  contactModal.style.display = "none";
}

//fermeture du formulaire
function closeFormModal() {
  contactModal.style.display = "none";
}

//Evenements
firstName.addEventListener("input", firstValidation);
lastName.addEventListener("input", lastValidation);
email.addEventListener("input", mailValidation);
message.addEventListener("input", messageValidation);

//validation du champ prénom
function firstValidation() {
  let regexName = /^[A-Za-zÀ-ÿ-']{2,20}$/;
  console.log(firstName.value);

  if (firstName.value === "") {
    firstName.classList.add("input-error");
    firstName.classList.remove("input-validate");
    firstError.innerHTML = "Veuillez saisir au minimum 2 caractères.";
    return false;
  } else if (regexName.test(firstName.value) === false) {
    firstName.classList.add("input-error");
    firstName.classList.remove("input-validate");
    firstError.innerHTML = "Format incorrect.";
    return false;
  } else {
    firstName.classList.remove("input-error");
    firstName.classList.add("input-validate");
    firstError.innerHTML = "";
    return true;
  }
}

//vérification de la bonne saisie du champ nom avec regex
function lastValidation() {
  let regexName = /^[A-Za-zÀ-ÿ-']{2,20}$/;
  console.log(lastName.value);

  if (lastName.value.trim() === "") {
    lastName.classList.add("input-error");
    lastName.classList.remove("input-validate");
    lastError.innerHTML = "Veuillez saisir au minimum 2 caractères.";
    return false;
  } else if (regexName.test(lastName.value) == false) {
    lastName.classList.add("input-error");
    lastName.classList.remove("input-validate");
    lastError.innerHTML = "Format incorrect";
    return false;
  } else {
    lastName.classList.remove("input-error");
    lastName.classList.add("input-validate");
    lastError.innerHTML = "";
    return true;
  }
}

// vérification de la bonne saisie du champ email avec regex
function mailValidation() {
  //console.log(email.value);
  let regexMail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //RFC 5322

  if (email.value.trim() === "") {
    email.classList.add("input-error");
    email.classList.remove("input-validate");
    emailError.innerHTML = "Veuillez saisir votre adresse mail";
    return false;
  } else if (regexMail.test(email.value) == false) {
    email.classList.add("input-error");
    email.classList.remove("input-validate");
    emailError.innerHTML = "Format incorrect";
    return false;
  } else {
    email.classList.remove("input-error");
    email.classList.add("input-validate");
    emailError.innerHTML = "";
    return true;
  }
}

function messageValidation() {
  console.log(message.value);

  if (message.value === "") {
    message.classList.add("input-error");
    message.classList.remove("input-validate");
    messageError.innerHTML = "Veuillez saisir votre message";
    return false;
  } else {
    message.classList.remove("input-error");
    message.classList.add("input-validate");
    messageError.innerHTML = "";
    return true;
  }
}
//validation du formulaire global-------------------------------------
//evenement sur le submit et on prévient l'envoi en cas d'erreur
modal.addEventListener("submit", (e) => {
  e.preventDefault();
  globalValidation();
});

function globalValidation() {
  // Vérifier que chaque champ est rempli et valide(moyen de repère du champ invalide)

  let validation = true;
  if (!firstValidation()) {
    console.log("%cprénom non valide", "color: #e74c3c");
    validation = false;
  }
  if (!lastValidation()) {
    console.log("%cnom non valide", "color: #e67e22");
    validation = false;
  }
  if (!mailValidation()) {
    console.log("%cmail non valide", "color: #3498db");
    validation = false;
  }
  if (!messageValidation()) {
    console.log("%cmessage inexistant", "color: #e74c3c");
    validation = false;
  }

  if (validation === true) {
    modalError.innerHTML = ""; // si le formulaire est bien rempli, pas de message d'erreur
    contactModal.reset(); // le formulaire s'efface
    contactModal.style.display = "none"; // Ferme la modale si OK
    modalError.innerHTML = "Votre message a bien été reçu, merci.";
  } else {
    modalError.innerHTML = "Veuillez renseigner tous les champs"; // Afficher les erreurs si pas OK
  }
}
