export const navBarSections = () => {
  // -----------nav Div 1-------------------
  const navBar_a = document.createElement("div");
  navBar_a.style.float = "left";
  navBar_a.style.fontSize = "20px";

  const curChildx = document.createElement("a");
  navBar_a.append(curChildx);
  curChildx.innerHTML = "IndMart";
  curChildx.href = "..#bannerBGid";

  curChildx.style.position = "absolute";
  curChildx.style.marginLeft = "100px";
  curChildx.style.marginTop = "18px";
  curChildx.style.cursor = "pointer";
  curChildx.style.textDecoration = "none";
  curChildx.style.color = "#fff";

  curChildx.addEventListener("mouseenter", () => {
    curChildx.style.color = "#00FFFF";
  });
  curChildx.addEventListener("mouseleave", () => {
    curChildx.style.color = "#fff";
  });

  // ---------------nav Div 2-------------------
  const navBar_b = document.createElement("div");
  navBar_b.style.float = "right";
  navBar_b.style.marginRight = "20px";
  navBar_b.style.display = "flex";
  navBar_b.style.alignItems = "center";
  navBar_b.style.gap = "40px";
  navBar_b.style.fontSize = "20px";
  navBar_b.className = "navBmenu";

  const navBarChild = [];
  // Nav About---------------------------------
  const curChild = document.createElement("a");
  curChild.innerHTML = "About";
  navBarChild.push(curChild);
  curChild.style.cursor = "pointer";
  curChild.style.textDecoration = "none";
  curChild.style.color = "#fff";

  curChild.addEventListener("click", function () {
    window.open("../about/about.html", "_self");
  });

  // nav Projects----------------------------------
  const curChilda = document.createElement("a");
  curChilda.innerHTML = "Projects";
  navBarChild.push(curChilda);
  curChilda.style.cursor = "pointer";
  curChilda.style.textDecoration = "none";
  curChilda.style.color = "#fff";
  curChilda.href = "../projects/project.html";

  curChilda.addEventListener("click", (event) => {
    curChilda.style.color = "blue";
  });

  const curChildb = document.createElement("a");
  curChildb.innerHTML = "Service";
  navBarChild.push(curChildb);
  curChildb.style.cursor = "pointer";
  curChildb.style.textDecoration = "none";
  curChildb.style.color = "#fff";
  curChildb.href = "../services/serviceOp.html";

  const curChildc = document.createElement("a");
  curChildc.innerHTML = "Plans & Pricing";
  navBarChild.push(curChildc);
  curChildc.style.cursor = "pointer";
  curChildc.style.textDecoration = "none";
  curChildc.style.color = "#fff";
  curChildc.href = "../plansPricing/planpricing.html";

  const curChildd = document.createElement("a");
  curChildd.innerHTML = "Contact";
  navBarChild.push(curChildd);
  curChildd.href = "..#contactSecId";

  curChildd.style.cursor = "pointer";
  curChildd.style.textDecoration = "none";
  curChildd.style.color = "#fff";

  //  -----Log In section------------------------

  const curChilde = document.createElement("a");
  curChilde.addEventListener("click", (event) => {
    console.log(event.target);
    event.target.style.color = "#008080";
    // gives info about the event and event.target gives info about the target element
    const logInCont = document.querySelector(".login-modal");
    logInCont.style.opacity = "1";

    if (logInCont.style.display === "none" || logInCont.style.display === "") {
      logInCont.style.display = "block";
      event.target.style.color = "#00FFFF";
    } else {
      logInCont.style.display = "none";
      event.target.style.color = "#fff";
    }
  });

  navBarChild.push(curChilde);
  curChilde.style.display = "flex";
  curChilde.style.gap = "10px";

  const userLog = document.createElement("img");
  curChilde.appendChild(userLog);

  userLog.src = "../images/login.png";
  userLog.style.width = "35px";
  userLog.style.height = "35px";
  userLog.style.marginTop = "12px";
  userLog.style.cursor = "pointer";

  const userText = document.createElement("p");
  curChilde.appendChild(userText);
  userText.innerHTML = "Log In";
  userText.style.cursor = "pointer";

  navBar_b.append(...navBarChild);

  // ----Menu hide------------------------------------
  const navmanu = document.createElement("img");
  navmanu.src = "../images/menu.png";
  navmanu.style.float = "right";
  navmanu.style.margin = "15px";
  navmanu.style.display = "none";

  // hide User------------------------------------------
  const userlogDis = document.createElement("img");
  userlogDis.src = "../images/login2.png";
  userlogDis.style.display = "none";
  userlogDis.style.position = "absolute";
  userlogDis.style.right = "40px";
  userlogDis.style.width = "50px";
  userlogDis.style.opacity = "1";

  userlogDis.addEventListener("click", (event) => {
    const logInContResp = document.querySelector(".login-modal");
    logInContResp.style.opacity = "1";

    if (
      logInContResp.style.display === "none" ||
      logInContResp.style.display === ""
    ) {
      logInContResp.style.display = "block";
    } else {
      logInContResp.style.display = "none";
    }
  });

  

  // Responsive -------------------------------------
  if (window.innerWidth < 855) {
    navBar_b.style.gap = "18px";
  }
  if (window.innerWidth < 750) {
    navBar_b.style.fontSize = "18px";
  }
  // Responsive in Menu Bar----------------------------------
  if (window.innerWidth < 715) {
    navBar_b.style.display = "none";
    navmanu.style.display = "block";
    userText.style.marginTop = "0px";
    userlogDis.style.display = "block";
    userlogDis.style.marginTop = "570px";
    userlogDis.style.boxShadow = '1px 1px 25px #000'
    userlogDis.style.backgroundColor = 'blue'
    userlogDis.style.borderRadius = '50px'
    curChilde.style.display = "none";

    // call fun---------------------------------
    navmanu.addEventListener("click", (event) => {
      const navBar_b = document.querySelector(".navBmenu");
      navBar_b.style.opacity = "1";

      if (navBar_b.style.display === "none" || navBar_b.style.display === "") {
        navBar_b.style.display = "block";

        navBar_b.style.position = "absolute";
        navBar_b.style.padding = "12px";
        navBar_b.style.display = "flex";
        navBar_b.style.flexDirection = "column";
        navBar_b.style.width = "100%";
        navBar_b.style.marginTop = "60px";
        navBar_b.style.backgroundColor = "#00CED1";
      } else {
        navBar_b.style.display = "none";
      }
    });
  }

  return [navBar_a, navBar_b, navmanu, userlogDis];
};
