export const createModal = () => {
  //   Login container-----------------------------------
  const logInCont = document.createElement("div");
  logInCont.className = "login-modal";
  logInCont.style.width = "600px";
  logInCont.style.height = "400px";
  logInCont.style.position = "absolute";
  logInCont.style.backgroundColor = "#fff";
  logInCont.style.marginLeft = "+30%";
  logInCont.style.marginTop = "200px";
  logInCont.style.textAlign = "center";
  logInCont.style.display = "none";
  logInCont.style.flexDirection = "column";
  logInCont.style.boxShadow = "5px 5px 65px #000";
  logInCont.style.borderRadius = "12px";

  const logInPar = document.createElement("p");
  logInCont.appendChild(logInPar);
  logInPar.innerHTML = "Member Login";
  logInPar.style.fontSize = "25px";
  logInPar.style.color = "#000";

  const logInEm = document.createElement("input");
  logInCont.appendChild(logInEm);
  logInEm.placeholder = "Email";
  logInEm.style.width = "400px";
  logInEm.style.padding = "8px";
  logInEm.style.fontSize = "16px";
  logInEm.style.outline = "none";
  logInEm.style.border = "none";
  logInEm.style.borderBottom = "4px solid #A9A9A9";
  logInEm.style.background = "none";
  logInEm.style.marginTop = "18px";

  const logInPs = document.createElement("input");
  logInCont.appendChild(logInPs);
  logInPs.placeholder = "Password";
  logInPs.style.width = "400px";
  logInPs.style.padding = "8px";
  logInPs.style.fontSize = "16px";
  logInPs.style.outline = "none";
  logInPs.style.border = "none";
  logInPs.style.borderBottom = "4px solid #A9A9A9";
  logInPs.style.background = "none";
  logInPs.style.marginTop = "24px";

  //   Click buttob---------------------------------------------

  const logInBtn = document.createElement("Button");
  logInCont.appendChild(logInBtn);
  logInBtn.innerHTML = "LOGIN";
  logInBtn.style.width = "200px";
  logInBtn.style.padding = "10px";
  logInBtn.style.fontWeight = "bold";
  logInBtn.style.marginTop = "42px";
  logInBtn.style.borderRadius = "10px";
  logInBtn.style.border = "none";
  logInBtn.style.backgroundColor = "#008080";
  logInBtn.style.cursor = "pointer";
  logInBtn.style.color = "#fff";
  logInBtn.addEventListener("mouseover", function () {
    logInBtn.style.backgroundColor = "#00CED1";
    logInBtn.style.color = "#000";
  });
  logInBtn.addEventListener("mouseout", function () {
    logInBtn.style.backgroundColor = "#008080";
    logInBtn.style.color = "#fff";
  });

  // forget button---------------------------------------------
  const logInForgot = document.createElement("Button");
  logInCont.appendChild(logInForgot);
  logInForgot.innerHTML = "Forget Username/Password?";
  logInForgot.style.fontSize = "16px";
  logInForgot.style.marginTop = "110px";
  logInForgot.style.background = "none";
  logInForgot.style.border = "none";
  logInForgot.style.width = "230px";
  logInForgot.style.marginLeft = "-215px";
  logInForgot.style.cursor = "pointer";
  logInForgot.style.position = "absolute";

  logInForgot.addEventListener("mouseenter", () => {
    logInForgot.style.color = "#20B2AA";
  });
  logInForgot.addEventListener("mouseleave", () => {
    logInForgot.style.color = "#000";
  });

  //   Create account-------------------------------------

  const logInCreat = document.createElement("Button");
  logInCont.appendChild(logInCreat);
  logInCreat.innerHTML = "Creat your Account ➜";
  logInCreat.style.fontSize = "16px";
  logInCreat.style.marginTop = "80px";
  logInCreat.style.background = "none";
  logInCreat.style.border = "none";
  logInCreat.style.width = "180px";
  logInCreat.style.marginLeft = "385px";
  logInCreat.style.cursor = "pointer";

  logInCreat.addEventListener("mouseenter", () => {
    logInCreat.style.color = "#20B2AA";
  });
  logInCreat.addEventListener("mouseleave", () => {
    logInCreat.style.color = "#000";
  });

  if(window.innerWidth < 715){
    logInCont.style.marginTop = "100px";
    logInCont.style.marginLeft = '20px'
    logInCont.style.width = '90%'
    logInEm.style.width = '70%'
    logInPs.style.width = '70%'
    logInCreat.style.marginLeft = '0px'
  }

  return logInCont;
};
