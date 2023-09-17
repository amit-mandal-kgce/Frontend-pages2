import { navBarSections } from "../components/navbar.js";
import { createModal } from "../components/modal.js";
import {servicesBooksNow} from "./servicBook.js"
import { contactSection } from "../components/contact.js";
import { footerSection } from "../components/footer.js";

//---------Body Sections--------------------------
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

// section 1------------------------
const servicDiv = document.createElement("div");
bodyMain.appendChild(servicDiv);
servicDiv.style.textAlign = 'center'
const servicBig = document.createElement('p')
servicDiv.append(servicBig);
servicBig.innerHTML = "SERVICES"
servicBig.style.fontSize = '50px'
servicBig.style.marginTop = '150px'
if(window.innerWidth < 500){
  servicBig.style.fontSize = '35px'
}

// section 2------------------------
const servSec = document.createElement('section')
bodyMain.append(servSec)
servSec.style.textAlign = 'center'
const servBookImport = servicesBooksNow(
  "./servImg/ser1.png",
  "PROJECT MANAGEMENT",
  "1 hr",
  "₹2500",
  "Book Now"
);
servSec.append(servBookImport);
const servBookImportB = servicesBooksNow(
  "./servImg/ser2.png",
  "OPERATIONAL CONSULTING",
  "1 hr",
  "₹3500",
  "Book Now"
);
servSec.append(servBookImportB);
const servBookImportC = servicesBooksNow(
  "./servImg/ser1.png",
  "CORPORATE STRATEGY",
  "1 hr",
  "₹4500",
  "Book Now"
);
servSec.append(servBookImportC);
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