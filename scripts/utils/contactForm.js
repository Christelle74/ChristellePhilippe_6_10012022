//const displayModal = document.querySelector(".contact_button");
//const closeModal = document.querySelector("onclick");

function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
}

//ouverture du modal
displayModal.addEventListener("click", displayModal);

// fermeture du formulaire avec la X
closeModal.addEventListener("click", closeModal);
