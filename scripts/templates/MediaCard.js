const galeryContainer = document.querySelector(".galeryContainer");
console.log(galeryContainer);

const mediaDisplay = async () => {
  await fetchMedias();

  //galeryContainer.innerHTML = URL.createObjectURL(mediaDisplay);
};

mediaDisplay();
