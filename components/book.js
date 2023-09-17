export const bookSections = () => {
  const contNara = document.createElement("h3");

  contNara.innerHTML = "Developing Innovative Strategies";
  contNara.style.fontSize = "30px";
  contNara.style.fontWeight = "200";

  const contNarb = document.createElement("p");

  contNarb.innerHTML = "ACHIEVING GROWTH";
  contNarb.style.fontSize = "50px";
  contNarb.style.fontWeight = "100";

  const contNarc = document.createElement("Button");
  contNarc.innerHTML = "Book A Consultation";
  contNarc.style.fontSize = "18px";
  contNarc.style.backgroundColor = "#fff";
  contNarc.style.padding = "12px";
  contNarc.style.cursor = "pointer";
  contNarc.style.fontWeight = "100";
  contNarc.style.transition = "all 2s";
  contNarc.style.fontWeight = '700'

  contNarc.addEventListener("mouseover", function () {
    contNarc.style.backgroundColor = "#008080";
    contNarc.style.color = "#fff";
  });
  contNarc.addEventListener("mouseout", function () {
    contNarc.style.backgroundColor = "#ffff";
    contNarc.style.color = "#008080";
  });
  contNarc.addEventListener("click", function () {
    window.open("./services/serviceOp.html", "_self");
  });

  // responsive------------------------------------
  if (window.innerWidth < 1350) {
    contNarb.style.fontSize = "45px";
  }
  if (window.innerWidth < 1205) {
    contNarb.style.fontSize = "45px";
  }
  if (window.innerWidth < 924) {
    contNara.style.fontSize = "20px";
    contNarb.style.fontSize = "35px";
    contNarc.style.padding = "10px";
  }
  if (window.innerWidth < 855) {
    contNara.style.fontSize = "20px";
    contNarb.style.fontSize = "35px";
    contNarc.style.padding = '10px'
  }
  if (window.innerWidth < 757) {
    contNara.style.fontSize = "18px";
    contNarb.style.fontSize = "30px";
  }
  if (window.innerWidth < 715) {
    contNara.style.fontSize = "16px";
    contNarb.style.fontSize = "25px";
    contNarc.style.padding = "10px";
    contNarc.style.fontSize = "12px";
  }
  if (window.innerWidth < 531) {
    contNara.style.fontSize = "12px";
    contNarb.style.fontSize = "20px";
    contNarc.style.padding = "5px";
    contNarc.style.fontSize = '10px'
  }
   if (window.innerWidth < 470) {
     contNarb.style.fontSize = "18px";
   }
   if (window.innerWidth < 393) {
    contNara.style.fontSize = "9px";
    contNarb.style.fontSize = "17px";
    contNarc.style.fontSize = '9px'
    contNarc.style.marginTop = "9px";
   }
   if (window.innerWidth < 345) {
    contNarb.style.fontSize = "15px";
   }
   if (window.innerWidth < 345) {
     contNarb.style.fontSize = "13px";
   }
  return [contNara, contNarb, contNarc];
};

