import { navBarSections } from "../components/navbar.js";
import { createModal } from "../components/modal.js";
import { aboutDetails } from "./aboutComponents/aboutdet.js";
import { ourTeamExport } from "./aboutComponents/ourteam.js";
import { contactSection } from "../components/contact.js";
import { footerSection } from "../components/footer.js";

const bodyMain = document.querySelector("body");
bodyMain.style.margin = "0px";
bodyMain.style.marginTop = "60px";

//----------NavBar Sections------------------------------------
const navBar = document.createElement("nav");
bodyMain.append(navBar);

// flex Wera
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
console.log(modalComponent);
navBar.appendChild(modalComponent);

// Section 1 About Big----------------------------------
const bigaboutDiv = document.createElement('div')
bodyMain.appendChild(bigaboutDiv);
bigaboutDiv.style.textAlign = 'center'
const bigAbout = document.createElement("p");
bigaboutDiv.appendChild(bigAbout);
bigAbout.innerHTML = "ABOUT";
bigAbout.style.fontSize = "50px";
bigAbout.style.marginTop = "150px";

// section 2 about details---------------------------
const abouDet = document.createElement("section");
bodyMain.appendChild(abouDet);
abouDet.style.display = "flex";
abouDet.style.width = "80%";
abouDet.style.marginLeft = "10%";

const aboutImport = aboutDetails(
  "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.",
  "This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.",
  "./images/aboutA.png"
);
abouDet.append(...aboutImport);

// Section 3-------------------------------------
const ourTeamDiv = document.createElement('div')
bodyMain.appendChild(ourTeamDiv);
ourTeamDiv.style.textAlign = 'center'
const outTeam = document.createElement("p");
ourTeamDiv.appendChild(outTeam);
outTeam.innerHTML = "OUR TEAM";
outTeam.style.fontSize = "50px";
outTeam.style.marginTop = "150px";

// Section 4---------------------------

const ourTeamSec = document.createElement("section");
bodyMain.append(ourTeamSec);
ourTeamSec.style.alignItems = 'center'
ourTeamSec.style.display = 'flex'
ourTeamSec.style.flexWrap = 'wrap'
if(window.innerWidth < 550){
  // ourTeamSec.style.flexWrap = "nowrap";
  ourTeamSec.style.flexDirection = 'column'
}

const ourTeamImportA = ourTeamExport(
  "./images/dominick.png",
  "DOMINICK JAMES",
  "Founder and Principal",
  "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
);
ourTeamSec.append(...ourTeamImportA);
const ourTeamImportC = ourTeamExport(
    "./images/trevor.png",
    "TREVOR SINCLAIR",
    "VP Accounts",
    "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
);
ourTeamSec.append(...ourTeamImportC);
const ourTeamImportB = ourTeamExport(
  "./images/kim.png",
  "KIM BAILEY",
  "VP Marketing",
  "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
);
ourTeamSec.append(...ourTeamImportB);
const ourTeamImportD = ourTeamExport(
  "./images/grace.png",
  "GRACE RIOS",
  "Project Manager",
  "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you."
);
ourTeamSec.append(...ourTeamImportD);



// Section 5--------------------------------------
const contactSec = document.createElement("section");
bodyMain.append(contactSec);

contactSec.style.backgroundColor = "#2F4F4F";
contactSec.style.color = "#fff";
contactSec.style.textAlign = "center";
contactSec.style.padding = "16px";
contactSec.style.height = "460px";

const contactFun = contactSection();
contactSec.append(contactFun);
// Section 6------------------------------
const footerSec = document.createElement("section");
bodyMain.append(footerSec);

footerSec.style.backgroundColor = "#191970";
footerSec.style.color = "#fff";
footerSec.style.padding = "1px";

const footerFun = footerSection();
footerSec.append(footerFun);
