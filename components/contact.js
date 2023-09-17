export const contactSection = () => {
  const contactdiv = document.createElement("div");
  const contChildDiv = [];
  // heading---------------------------------------
  const contHeading = document.createElement("h2");
  contHeading.innerHTML = "CONTACT";
  contHeading.style.fontSize = "50px";
  contHeading.style.fontWeight = "100";
  // input name------------------------------------------
  const contactUl = document.createElement("ul");
  const contUlAr = [];
  contactUl.style.display = "flex";
  contactUl.style.gap = "32px";
  contactUl.style.justifyContent = "center";
  contactUl.style.marginTop = "60px";

  const continput = document.createElement("input");
  continput.type = "text";
  continput.name = "text";
  continput.placeholder = "First Name";
  continput.style.outline = "none";
  continput.style.width = "500px";
  continput.style.fontSize = "22px";
  continput.style.padding = "8px";
  continput.style.border = "none";
  continput.style.background = "none";
  continput.style.borderBottom = "4px solid #fff";
  continput.style.color = "#fff";

  const continputA = document.createElement("input");
  continputA.type = "text";
  continputA.name = "text";
  continputA.placeholder = "Last Name";
  continputA.style.outline = "none";
  continputA.style.width = "500px";
  continputA.style.fontSize = "22px";
  continputA.style.padding = "8px";
  continputA.style.border = "none";
  continputA.style.background = "none";
  continputA.style.borderBottom = "4px solid #fff";
  continputA.style.color = "#fff";

  // input name------------------------------------------
  const conChildUl = document.createElement("ul");
  const conChilAr = [];
  conChildUl.style.display = "flex";
  conChildUl.style.gap = "32px";
  conChildUl.style.justifyContent = "center";
  conChildUl.style.marginTop = "60px";

  const conChildIn = document.createElement("input");
  conChildIn.type = "text";
  conChildIn.name = "text";
  conChildIn.placeholder = "Email*";
  conChildIn.style.outline = "none";
  conChildIn.style.width = "500px";
  conChildIn.style.fontSize = "22px";
  conChildIn.style.padding = "8px";
  conChildIn.style.border = "none";
  conChildIn.style.background = "none";
  conChildIn.style.borderBottom = "4px solid #fff";
  conChildIn.style.color = "#fff";

  const conChildInA = document.createElement("input");
  conChildInA.type = "text";
  conChildInA.name = "text";
  conChildInA.placeholder = "Subject";
  conChildInA.style.outline = "none";
  conChildInA.style.width = "500px";
  conChildInA.style.fontSize = "22px";
  conChildInA.style.padding = "8px";
  conChildInA.style.border = "none";
  conChildInA.style.background = "none";
  conChildInA.style.borderBottom = "4px solid #fff";
  conChildInA.style.color = "#fff";

  // input & Button---------------------------------------
  const contChUl = document.createElement("ul");
  const contChUlAr = [];
  contChUl.style.display = "flex";
  contChUl.style.gap = "52px";
  contChUl.style.justifyContent = "center";
  contChUl.style.marginTop = "60px";

  const childInp = document.createElement("input");
  childInp.type = "text";
  childInp.name = "text";
  childInp.placeholder = "Message*";
  childInp.style.outline = "none";
  childInp.style.width = "815px";
  childInp.style.fontSize = "22px";
  childInp.style.padding = "8px";
  childInp.style.border = "none";
  childInp.style.background = "none";
  childInp.style.borderBottom = "4px solid #fff";
  childInp.style.color = "#fff";

  const childBtn = document.createElement("button");
  childBtn.innerHTML = "Submit";
  childBtn.style.width = "182px";
  childBtn.style.fontSize = "17px";
  childBtn.style.border = "1px solid #fff";
  childBtn.style.transition = "all 2s";
  childBtn.style.cursor = "pointer";
  childBtn.addEventListener("mouseover", function () {
    childBtn.style.backgroundColor = "#2F4F4F";
    childBtn.style.color = "#fff";
  });
  childBtn.addEventListener("mouseout", function () {
    childBtn.style.backgroundColor = "#fff";
    childBtn.style.color = "#2F4F4F";
  });

  // -------------------Big Child-----------------------
  contChildDiv.push(contHeading);
  contChildDiv.push(contactUl);
  contChildDiv.push(conChildUl);
  contChildDiv.push(contChUl);
  //------------Child----------------
  contUlAr.push(continput);
  contUlAr.push(continputA);
  conChilAr.push(conChildIn);
  conChilAr.push(conChildInA);
  contChUlAr.push(childInp);
  contChUlAr.push(childBtn);

  // ---------Big Child------------
  contactUl.append(...contUlAr);
  conChildUl.append(...conChilAr);
  contChUl.append(...contChUlAr);
  // ----------Main---------------
  contactdiv.append(...contChildDiv);

  // Responsive--------------------------
  if (window.innerWidth < 930) {
    contHeading.style.fontSize = "40px";
    continput.style.width = "250px";
    continputA.style.width = "250px";
    conChildIn.style.width = "250px";
    conChildInA.style.width = "250px";
    childInp.style.width = "400px";
    childBtn.style.width = "100px";
  }
  if (window.innerWidth < 770) {
    contactdiv.style.marginLeft = "-41px";
    contHeading.style.fontSize = "40px";
  }
  if (window.innerWidth < 611) {
    contHeading.style.fontSize = "40px";
    continput.style.width = "200px";
    continputA.style.width = "200px";
    conChildIn.style.width = "200px";
    conChildInA.style.width = "200px";
    childInp.style.width = "300px";
  }
  if (window.innerWidth < 531) {
    contHeading.style.fontSize = "30px";
    continput.style.width = "180px";
    continputA.style.width = "180px";
    conChildIn.style.width = "180px";
    conChildInA.style.width = "180px";
    childInp.style.width = "250px";
  }
  if (window.innerWidth < 470) {
    continput.style.width = "150px";
    continput.style.fontSize = "15px";
    continput.style.height = "10px";
    continput.style.borderBottom = "3px solid";
    continputA.style.width = "150px";
    continputA.style.fontSize = "15px";
    continputA.style.height = "10px";
    continputA.style.borderBottom = "3px solid";
    conChildIn.style.width = "150px";
    conChildIn.style.fontSize = "15px";
    conChildIn.style.height = "10px";
    conChildIn.style.borderBottom = "3px solid";
    conChildInA.style.width = "150px";
    conChildInA.style.fontSize = "15px";
    conChildInA.style.height = "10px";
    conChildInA.style.borderBottom = "3px solid";
    childInp.style.width = "190px";
    childInp.style.fontSize = "15px";
    childInp.style.height = "10px";
    childInp.style.borderBottom = "3px solid";
  }
  if (window.innerWidth < 425) {
    contactdiv.style.marginLeft = "10px";
    contactUl.style.flexDirection = "column";
    continput.style.width = "300px";
    continputA.style.width = "300px";
    conChildUl.style.flexDirection = "column";
    conChildUl.style.marginTop = "30px";
    conChildIn.style.width = "300px";
    conChildInA.style.width = "300px";
    contChUl.style.flexDirection = "column";
    contChUl.style.marginTop = "30px";
    childInp.style.width = "300px";
    childBtn.style.marginLeft = "100px";
  }
  if (window.innerWidth < 393) {
    continput.style.width = "250px";
    continputA.style.width = "250px";
    conChildIn.style.width = "250px";
    conChildInA.style.width = "250px";
    childInp.style.width = "250px";
    childBtn.style.marginLeft = "80px";
  }
  if (window.innerWidth < 393) {
    continput.style.width = "220px";
    continputA.style.width = "220px";
    conChildIn.style.width = "220px";
    conChildInA.style.width = "220px";
    childInp.style.width = "220px";
  }
  if (window.innerWidth < 311) {
    continput.style.width = "200px";
    continputA.style.width = "200px";
    conChildIn.style.width = "200px";
    conChildInA.style.width = "200px";
    childInp.style.width = "200px";
    childBtn.style.marginLeft = "60px";
  }
  return contactdiv;
};
