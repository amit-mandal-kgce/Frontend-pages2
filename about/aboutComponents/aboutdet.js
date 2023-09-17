export const aboutDetails = (aboutParAData, aboutParBData, leftImagesAbo) => {
  const aboutExpDiv = document.createElement("div");
  // ------------------------------------------------
  const aboutParA = document.createElement("p");
  aboutExpDiv.appendChild(aboutParA);
  aboutParA.innerHTML = aboutParAData;
  aboutParA.style.padding = "20px";
  aboutParA.style.letterSpacing = "1px";
  const aboutParB = document.createElement("p");
  aboutExpDiv.appendChild(aboutParB);
  aboutParB.innerHTML = aboutParBData;
  aboutParB.style.padding = "20px";
  aboutParB.style.letterSpacing = "1px";
  const aboutRigImg = document.createElement("img");
  aboutRigImg.src = leftImagesAbo;
  aboutRigImg.style.width = "50%";

  if (window.innerWidth < 550) {
    aboutRigImg.style.display = "none";
    aboutExpDiv.style.boxShadow = "1px 1px 5px";
    aboutExpDiv.style.backgroundImage = "url('./images/aboutA.png')";
    aboutExpDiv.style.color = "#2F4F4F";
  }
  return [aboutExpDiv, aboutRigImg];
};
