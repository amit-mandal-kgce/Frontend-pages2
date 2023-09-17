export const footerSection = () => {
  const footerUl = document.createElement("ul");
  const footerUlAr = [];
  footerUl.style.display = "flex";
  footerUl.style.textAlign = "center";
  footerUl.style.gap = "340px";
  footerUl.style.marginLeft = "140px";
  // ----------First Div--------------------------
  const foSecChil = document.createElement("div");
  const foSecAr = [];
  const footerheader = document.createElement("h2");
  footerheader.innerHTML = "IndMart";
  footerheader.style.fontSize = "25px";
  const footerPara = document.createElement("p");
  footerPara.innerHTML =
    "Betai Nadia 741163, Krishnagar to Karimpur Road, Mail:- amitmandalbetai@gmail.com, Contact: +918513089660";
  footerPara.style.width = "200px";

  foSecAr.push(footerheader);
  foSecAr.push(footerPara);
  foSecChil.append(...foSecAr);
  footerUlAr.push(foSecChil);
  // --------2nd Div--------------------------
  const footerMenu = document.createElement("div");
  const foMenuAr = [];
  const childMenu = document.createElement("h3");
  childMenu.innerHTML = "MENU";
  childMenu.style.fontSize = "25px";
  const childAbout = document.createElement("p");
  childAbout.innerHTML = "About";
  const childPro = document.createElement("p");
  childPro.innerHTML = "Projects";
  const childServ = document.createElement("p");
  childServ.innerHTML = "Services";
  const childPlan = document.createElement("p");
  childPlan.innerHTML = "Plans & Pricing";
  const childCont = document.createElement("p");
  childCont.innerHTML = "Contact";

  foMenuAr.push(childMenu);
  foMenuAr.push(childAbout);
  foMenuAr.push(childPro);
  foMenuAr.push(childServ);
  foMenuAr.push(childPlan);
  foMenuAr.push(childCont);
  footerMenu.append(...foMenuAr);
  footerUlAr.push(footerMenu);
  // ----------3rd Div-------------------------
  const footerSocial = document.createElement("div");
  const fosocialAr = [];
  const chilparag = document.createElement("p");
  chilparag.innerHTML = "SOCIALS";
  chilparag.style.fontSize = "25px";
  const childFace = document.createElement("img");
  childFace.src = "../images/facebook.png";
  childFace.style.cursor = "pointer";
  childFace.style.width = "40px";
  const childLinked = document.createElement("img");
  childLinked.src = "../images/linkedin.png";
  childLinked.style.cursor = "pointer";
  childLinked.style.width = "40px";
  const chilPaLas = document.createElement("p");
  chilPaLas.innerHTML = "© 2023 by IndMart.";

  fosocialAr.push(chilparag);
  fosocialAr.push(childFace);
  fosocialAr.push(childLinked);
  fosocialAr.push(chilPaLas);
  footerUlAr.push(footerSocial);

  footerSocial.append(...fosocialAr);
  footerUl.append(...footerUlAr);

  // responsive------------------------------------
  if (window.innerWidth < 1240) {
    footerUl.style.gap = "250px";
    footerUl.style.marginLeft = "100px";
  }
  if (window.innerWidth < 1205) {
    footerUl.style.gap = "250px";
    footerUl.style.marginLeft = "100px";
  }
  if (window.innerWidth < 1191) {
    footerUl.style.gap = "200px";
  }
  if (window.innerWidth < 924) {
    footerUl.style.gap = "130px";
    footerUl.style.marginLeft = '60px'
  }
  if (window.innerWidth < 855) {
    footerUl.style.gap = "100px";
    footerUl.style.marginLeft = "70px";
  }
  if (window.innerWidth < 770) {
    footerUl.style.gap = "100px";
    footerUl.style.marginLeft = "15px";
  }
  if (window.innerWidth < 715) {
    footerUl.style.gap = "50px";
    footerUl.style.marginLeft = "50px";
  }
  if (window.innerWidth < 670) {
    footerUl.style.gap = "50px";
    footerUl.style.marginLeft = "20px";
    footerUl.style.fontSize = '15px'
  }
  if (window.innerWidth < 611) {
    footerUl.style.gap = "30px";
    childFace.style.width = "30px";
    childLinked.style.width = "30px";
    footerUl.style.fontSize = "10px";
  }
  if (window.innerWidth < 531) {
    footerUl.style.gap = "30px";
    childFace.style.width = "30px";
    chilparag.style.fontSize= "20px";
    childMenu.style.fontSize = "20px";
    footerheader.style.fontSize = "20px";
    footerUl.style.marginLeft = "-10px";
  }
  if (window.innerWidth < 455) {
    footerUl.style.flexDirection = "column";
    footerPara.style.marginLeft = "100px";
    footerheader.style.fontSize = "25px";
    childMenu.style.fontSize = "25px";
    chilparag.style.fontSize = "25px";
    childFace.style.width = "40px";
    childLinked.style.width = "40px";
    footerUl.style.fontSize = "15px";
  }
  if (window.innerWidth < 380) {
    footerPara.style.marginLeft = "60px";
  }
  if (window.innerWidth < 345) {
    footerPara.style.marginLeft = "50px";
  }
  if (window.innerWidth < 311) {
    footerPara.style.marginLeft = "30px";
  }
  return footerUl;
};