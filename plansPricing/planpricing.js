import { navBarSections } from "../components/navbar.js";
import { createModal } from "../components/modal.js";
import { planImportSection } from "./planContent.js";
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
navBar.appendChild(modalComponent);
// section 1------------------------------------
const palnBigDiv = document.createElement("div");
bodyMain.append(palnBigDiv);
palnBigDiv.style.textAlign = 'center'

const palnBigHed = document.createElement("p");
palnBigDiv.appendChild(palnBigHed);
palnBigHed.innerHTML = "GROWTH AND INNOVATION PLANS";
palnBigHed.style.fontSize = "50px";
palnBigHed.style.marginTop = "150px";

if(window.innerWidth < 800){
  palnBigHed.style.fontSize = '35px'
}

const planSmHed = document.createElement("p");
palnBigDiv.appendChild(planSmHed);
planSmHed.innerHTML =
  "We help businesses improve their performance through innovation in products, services, and strategy.";
planSmHed.style.marginTop = "-30px";

const planContSec = document.createElement('section')
bodyMain.append(planContSec);
planContSec.style.display = 'flex'
planContSec.style.flexWrap = "wrap";
planContSec.style.gap = '10px'
planContSec.style.textAlign = "center";


const planExport = planImportSection(
  "Management 101",
  "₹",
  "4,140",
  "Actualize your business model and boost your KPIs",
  "Valid for 3 months",
  "select"
);
planContSec.append(planExport);

const planExportA = planImportSection(
  "Financial Strategy",
  "₹",
  "8,290",
  "Add value and maximize your competitive advantage",
  "Valid for 6 months",
  "select"
);
planContSec.append(planExportA);

const planExportB = planImportSection(
  "Data and Digital Sol",
  "₹",
  "5,800",
  "Harness the power of technology to upgrade your business",
  "Valid for 12 months",
  "select"
);
planContSec.append(planExportB);

// -----------------Section2 CONTACT--------------------------
const contactSec = document.createElement("section");
bodyMain.append(contactSec);

contactSec.style.backgroundColor = "#2F4F4F";
contactSec.style.color = "#fff";
contactSec.style.textAlign = "center";
contactSec.style.padding = "16px";
contactSec.style.height = "460px";

const contactFun = contactSection();
contactSec.append(contactFun);
// --------Section3 footer-----------------
const footerSec = document.createElement("section");
bodyMain.append(footerSec);

footerSec.style.backgroundColor = "#191970";
footerSec.style.color = "#fff";
footerSec.style.padding = "1px";

const footerFun = footerSection();
footerSec.append(footerFun);