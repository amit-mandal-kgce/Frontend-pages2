import { navBarSections } from "../components/navbar.js";
import { createModal } from "../components/modal.js";
import { proGroupDiscus } from "../projects/projectGroupDis.js";
import { contactSection } from "../components/contact.js";
import { footerSection } from "../components/footer.js";

const bodyMain = document.querySelector("body");
bodyMain.style.margin = "0px";
bodyMain.style.marginTop = "60px";

//----------NavBar Sections------------------------------------
const navBar = document.createElement("nav");
bodyMain.append(navBar);
navBar.style.width = "100%";
navBar.style.height = "60px";
navBar.style.color = "#fff";
navBar.style.position = "fixed";
navBar.style.top = "0";
navBar.style.zIndex = "1";
navBar.style.backgroundColor = "#008B8B";

const navBarSec = navBarSections();

navBar.append(...navBarSec);

// ***** MODAL
const modalComponent = createModal();
console.log("MODAL", modalComponent);
navBar.appendChild(modalComponent);

// section 1----------------------
const projectDiv = document.createElement("div");
bodyMain.appendChild(projectDiv);
projectDiv.style.textAlign = 'center'
const projectBig = document.createElement("p");
projectDiv.appendChild(projectBig);
projectBig.innerHTML = "PROJECTS";
projectBig.style.fontSize = "60px";
projectBig.style.marginTop = "150px";
if(window.innerWidth < 900){
  projectBig.style.fontSize = '30px'
}
//   Section 2-----------------------
const projectSec = document.createElement("section");
bodyMain.append(projectSec);
projectSec.style.textAlign = 'center'
projectSec.style.display = 'flex'
projectSec.style.flexWrap = 'wrap'
projectSec.style.gap = '100px'

const projectImport = proGroupDiscus(
  "./proImage/pro1.png",
  "PROJECT 1",
  "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
);
projectSec.append(projectImport);
const projectImportA = proGroupDiscus(
  "./proImage/pro2.png",
  "PROJECT 2",
  "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
);
projectSec.append(projectImportA);

const projectImportTwo = proGroupDiscus(
  "./proImage/pro3.png",
  "PROJECT 3",
  "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
);
projectSec.append(projectImportTwo);
const projectImportTwoB = proGroupDiscus(
  "./proImage/pro4.png",
  "PROJECT 4",
  "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
);
projectSec.append(projectImportTwoB);

// -----------------Section3 CONTACT--------------------------
const contactSec = document.createElement("section");
bodyMain.append(contactSec);

contactSec.style.backgroundColor = "#2F4F4F";
contactSec.style.color = "#fff";
contactSec.style.textAlign = "center";
contactSec.style.padding = "16px";
contactSec.style.height = "460px";

const contactFun = contactSection();
contactSec.append(contactFun);
// --------Section4 footer-----------------
const footerSec = document.createElement("section");
bodyMain.append(footerSec);

footerSec.style.backgroundColor = "#191970";
footerSec.style.color = "#fff";
footerSec.style.padding = "1px";

const footerFun = footerSection();
footerSec.append(footerFun);