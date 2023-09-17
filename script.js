import { navBarSections } from "./components/navbar.js";
import { bookSections } from "./components/book.js";
import { createSectionChild } from "./components/service.js";
import { createSectionDiv } from "./components/about.js";
import { createSlideSection } from "./components/slider.js";
import { contactSection } from "./components/contact.js";
import { footerSection } from "./components/footer.js";
import { createModal } from "./components/modal.js";

//---------Body Sections--------------------------
const bodyMain = document.querySelector("body");
bodyMain.style.margin = "0px";
bodyMain.style.marginTop = "60px";

//----------NavBar Sections------------------------------------
const navBar = document.createElement("nav");
bodyMain.append(navBar);
navBar.style.width = "100%";
navBar.style.height = "60px";
navBar.style.color = "#ffffff";
navBar.style.backgroundColor = "#008B8B";
navBar.style.position = "fixed";
navBar.style.top = "0";
navBar.style.zIndex = "1";

// ***** MODAL
const modalComponent = createModal();
navBar.appendChild(modalComponent);

const navBarSec = navBarSections();
navBar.append(...navBarSec);

//---------section 1 Big Image------------------------------
const bannerBG = document.createElement("div");
bodyMain.append(bannerBG);
bannerBG.id = "bannerBGid";

const imageBg = document.createElement("img");
bannerBG.append(imageBg);
imageBg.src = "./images/big.jpg";
imageBg.style.width = "100%";
imageBg.style.height = "100%";
// responsive------------------------------------
if (window.innerWidth < 855) {
  imageBg.style.height = "80%";
}

// -----------Section 2 Book-------------
const bookSec = document.createElement("div");
bodyMain.append(bookSec);
bookSec.style.position = "relative";
bookSec.style.height = "auto";
bookSec.style.width = "50%";
bookSec.style.backgroundColor = "#ffffff";
bookSec.style.marginLeft = "400px";
bookSec.style.marginTop = "-270px";
bookSec.style.padding = "10px";
bookSec.style.textAlign = "center";
bookSec.style.borderTopLeftRadius = "5px";
bookSec.style.borderTopRightRadius = "5px";

// responsive------------------------------------
if (window.innerWidth < 1350) {
  bookSec.style.marginLeft = "350px";
}
if (window.innerWidth < 1205) {
  bookSec.style.marginLeft = "290px";
}
if (window.innerWidth < 930) {
  bookSec.style.marginLeft = "230px";
  bookSec.style.marginTop = "-240px";
}
if (window.innerWidth < 875) {
  bookSec.style.marginTop = "-220px";
}
if (window.innerWidth < 840) {
  bookSec.style.marginLeft = "200px";
}
if (window.innerWidth < 757) {
  bookSec.style.height = "auto";
  bookSec.style.marginTop = "-180px";
  bookSec.style.marginLeft = "200px";
}
if (window.innerWidth < 715) {
  bookSec.style.marginLeft = "190px";
  bookSec.style.marginTop = "-170px";
  bookSec.style.height = "auto";
}
if (window.innerWidth < 680) {
  bookSec.style.marginLeft = "145px";
}
if (window.innerWidth < 531) {
  bookSec.style.marginLeft = "120px";
  bookSec.style.marginTop = "-130px";
}
if (window.innerWidth < 470) {
  bookSec.style.marginLeft = "110px";
  bookSec.style.marginTop = "-120px";
  bookSec.style.height = "auto";
}
if (window.innerWidth < 425) {
  bookSec.style.marginLeft = "100px";
}
if (window.innerWidth < 393) {
  bookSec.style.marginTop = "-120px";
}
if (window.innerWidth < 360) {
  bookSec.style.marginLeft = "80px";
}
if (window.innerWidth < 345) {
  bookSec.style.marginLeft = "80px";
  bookSec.style.marginTop = "-110px";
}

const bookSecTmp = bookSections();
bookSec.append(...bookSecTmp);

// --------------Section3 SERVICES---------------
const servicSec = document.createElement("section");
servicSec.style.display = "flex";
servicSec.style.textAlign = "center";
servicSec.style.marginTop = "70px";
servicSec.style.marginLeft = "140px";
servicSec.style.gap = "250px";

bodyMain.append(servicSec);

// responsive------------------------------------
if (window.innerWidth < 1205) {
  servicSec.style.gap = "190px";
  servicSec.style.marginLeft = "100px";
}
if (window.innerWidth < 1191) {
  servicSec.style.gap = "150px";
}
if (window.innerWidth < 1005) {
  servicSec.style.gap = "100px";
}
if (window.innerWidth < 924) {
  servicSec.style.gap = "60px";
}
if (window.innerWidth < 855) {
  servicSec.style.marginLeft = "30px";
  servicSec.style.gap = "90px";
}
if (window.innerWidth < 813) {
  servicSec.style.gap = "70px";
}
if (window.innerWidth < 777) {
  servicSec.style.gap = "60px";
}
if (window.innerWidth < 750) {
  servicSec.style.gap = "30px";
}
if (window.innerWidth < 715) {
  servicSec.style.marginLeft = "40px";
  servicSec.style.gap = "70px";
}
if (window.innerWidth < 670) {
  servicSec.style.marginLeft = "40px";
  servicSec.style.gap = "60px";
}
if (window.innerWidth < 550) {
  servicSec.style.marginLeft = "20px";
}
if (window.innerWidth < 531) {
  servicSec.style.marginLeft = "35px";
  servicSec.style.gap = "30px";
}
if (window.innerWidth < 485) {
  servicSec.style.marginLeft = "25px";
  servicSec.style.gap = "20px";
}
if (window.innerWidth < 455) {
  servicSec.style.marginTop = "10px";
  servicSec.style.marginLeft = "50px";
  servicSec.style.flexDirection = "column";
}
const serviceChild = createSectionChild(
  "SERVICES",
  "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
);
const serviceChildTwo = createSectionChild(
  "PROJECTS",
  "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
);
const serviceChildThree = createSectionChild(
  "CLIENTS",
  "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
);
const servicSecAr = [serviceChild, serviceChildTwo, serviceChildThree];
servicSec.append(...servicSecAr);

// --------------section4 ABOUT US------------------------
const secAbout = document.createElement("section");
bodyMain.append(secAbout);
const aboutChildFun = createSectionDiv();
const secAboutArr = [aboutChildFun];
secAbout.append(...secAboutArr);
// --------------section5 Slider------------------------
const sliderSection = document.createElement("section");
bodyMain.append(sliderSection);

sliderSection.style.width = "98%";
sliderSection.style.margin = "1%";
sliderSection.style.overflow = "hidden";

const sliderSectionChild = createSlideSection();
console.log(sliderSectionChild);

sliderSection.append(...sliderSectionChild);
// -----------------Section6 CONTACT--------------------------
const contactSec = document.createElement("section");
bodyMain.append(contactSec);
contactSec.id = "contactSecId";

contactSec.style.backgroundColor = "#2F4F4F";
contactSec.style.color = "#fff";
contactSec.style.textAlign = "center";
contactSec.style.padding = "16px";
contactSec.style.height = "460px";

const contactFun = contactSection();
contactSec.append(contactFun);
// --------Section7 footer-----------------
const footerSec = document.createElement("footer");
bodyMain.append(footerSec);

footerSec.style.backgroundColor = "#191970";
footerSec.style.color = "#fff";
footerSec.style.padding = "1px";

const footerFun = footerSection();
footerSec.append(footerFun);

