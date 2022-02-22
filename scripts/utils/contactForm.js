// DOM Elements : on pointe les éléments du DOM
const firstName = document.querySelector("input[name=first]");
const lastName = document.querySelector("input[name=last]");
const email = document.querySelector("input[name=email]");
const message = document.querySelector("input[name=message]");

const openModal = document.getElementById("openForm"); //bouton contactez-moi
const contactModal = document.querySelector("#contact_modal"); //corp du formulaire
const form = document.querySelector(".form");
const closeModal = document.querySelector(".closeModal"); //croix de fermeture
const formulaire = document.querySelector("#formulaire");
//console.log(openModal);

const submitForm = document.querySelector("#validation");

//console.log(submitForm);

//openModal.addEventListener("click", launchModal);

function launchModal() {
  contactModal.style.display = "block";
  let inputs = Array.from(document.querySelectorAll(".input-validate")); //effacer le contour vert des champs
  inputs.forEach((input) => input.classList.remove("input-validate"));
  //form.style.display = "block"; // apparition du corps du formulaire
}

// fermeture du formulaire
closeModal.addEventListener("click", manualCloseDelay); // par la croix
submitForm.addEventListener("submit", autoCloseDelay); //par le bouton envoyer

//fermeture du formulaire
function closeFormModal() {
  contactModal.style.display = "none";
}

// delais de fermeture
let delayToClose;
function manualCloseDelay() {
  delayToClose = setTimeout(closeFormModal, 1000);
}
function autoCloseDelay() {
  delayToClose = setTimeout(closeFormModal, 4000);
}

//Evenements
firstName.addEventListener("input", firstValidation);
lastName.addEventListener("input", lastValidation);
email.addEventListener("input", mailValidation);
message.addEventListener("input", messageValidation);

//validation du champ prénom
function firstValidation() {
  let regexName = /^[A-Za-zÀ-ÿ-']{2,20}$/;
  // console.log(firstName.value);

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
  //console.log(lastName.value);

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
  //console.log(message.value);

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
formulaire.addEventListener("submit", (e) => {
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
    modalError.innerHTML = "Votre message a bien été reçu, merci."; // si le formulaire est bien rempli, pas de message d'erreur

    contactModal.style.display = "none"; // Ferme la modale si OK
    const returnValues = {
      prenom: document.querySelector("#first").value,
      nom: document.querySelector("#last").value,
      email: document.querySelector("#email").value,
      message: document.querySelector("#message").value,
    };
    console.log(returnValues);
    localStorage.setItem("returnValues", JSON.stringify(returnValues)); //stockage des données dans le localStorage
    //console.log(localStorage);

    autoCloseDelay();
    formulaire.reset(); // le formulaire s'efface
  } else {
    modalError.innerHTML = "Veuillez renseigner tous les champs"; // Afficher les erreurs si pas OK
  }
}

// ajouter un focus à tous les éléments de la modale
const focusableElements =
  'button, [src], input, select, textarea, [tabindex]:not([tabindex="-1"])';
const modal = document.querySelector("#contact_modal"); // select the modal by it's id

const firstFocusableElement = modal.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal
const focusableContent = modal.querySelectorAll(focusableElements);
const lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal

document.addEventListener("keydown", function (e) {
  let isTabPressed = e.key === "Tab" || e.keyCode === 9;

  if (!isTabPressed) {
    return;
  }

  if (e.shiftKey) {
    // if shift key pressed for shift + tab combination
    if (document.activeElement === firstFocusableElement) {
      lastFocusableElement.focus(); // add focus for the last focusable element
      e.preventDefault();
    }
  } else {
    // if tab key is pressed
    if (document.activeElement === lastFocusableElement) {
      // if focused has reached to last focusable element then focus first focusable element after pressing tab
      firstFocusableElement.focus(); // add focus for the first focusable element
      e.preventDefault();
    }
  }
});

firstFocusableElement.focus();
