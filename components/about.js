export const createSectionDiv = () => {
  const aboutUl = document.createElement("ul");
  aboutUl.style.textAlign = "center";
  aboutUl.style.height = "700px";
  aboutUl.style.overflow = "hidden";

  const aboutUlAr = [];

  const aboutUlImg = document.createElement("img");
  aboutUlImg.src = "./images/big2.jpg";
  aboutUlImg.style.width = "1800px";
  aboutUlImg.style.height = "100%";
  aboutUlImg.style.marginLeft = "-40px";
  aboutUlImg.style.opacity = "0.5";

  const aboutUlHeading = document.createElement("h2");
  aboutUlHeading.innerHTML = "ABOUT US";
  aboutUlHeading.style.position = "absolute";
  aboutUlHeading.style.marginTop = "-600px";
  aboutUlHeading.style.marginLeft = "650px";
  aboutUlHeading.style.fontSize = "30px";

  const aboutUlpara = document.createElement("p");
  aboutUlpara.innerHTML =
    "I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.";
  aboutUlpara.style.position = "absolute";
  aboutUlpara.style.marginTop = "-500px";
  aboutUlpara.style.marginLeft = "440px";
  aboutUlpara.style.width = "600px";
  aboutUlpara.style.fontSize = "20px";

  const aboutUlparaB = document.createElement("p");
  aboutUlparaB.innerHTML =
    "This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are.";
  aboutUlparaB.style.position = "Absolute";
  aboutUlparaB.style.marginTop = "-350px";
  aboutUlparaB.style.marginLeft = "440px";
  aboutUlparaB.style.width = "600px";
  aboutUlparaB.style.fontSize = "20px";

  const aboutUlButton = document.createElement("h4");
  aboutUlButton.innerHTML = "Learn More";
  aboutUlButton.style.position = "absolute";
  aboutUlButton.style.marginTop = "-150px";
  aboutUlButton.style.marginLeft = "600px";
  aboutUlButton.style.fontSize = "20px";
  aboutUlButton.style.padding = "14px";
  aboutUlButton.style.width = "200px";
  aboutUlButton.style.border = "1px solid #000";
  aboutUlButton.style.transition = "all 2s";
  aboutUlButton.style.cursor = "pointer";

  aboutUlButton.addEventListener("mouseover", function () {
    aboutUlButton.style.backgroundColor = "#008080";
    aboutUlButton.style.color = "#fff";
  });
  aboutUlButton.addEventListener("mouseout", function () {
    aboutUlButton.style.backgroundColor = "#0000";
    aboutUlButton.style.color = "#000";
  });
  aboutUlButton.addEventListener("click", function () {
    window.open("./about/about.html", "_self");
  });

  aboutUlAr.push(aboutUlImg);
  aboutUlAr.push(aboutUlHeading);
  aboutUlAr.push(aboutUlpara);
  aboutUlAr.push(aboutUlparaB);
  aboutUlAr.push(aboutUlButton);
  aboutUl.append(...aboutUlAr);

  // responsive------------------------------------
  if (window.innerWidth < 1350) {
    aboutUlHeading.style.marginLeft = "500px";
    aboutUlpara.style.marginLeft = "300px";
    aboutUlparaB.style.marginLeft = "300px";
    aboutUlButton.style.marginLeft = "500px";
  }
  if (window.innerWidth < 1205) {
    aboutUlHeading.style.marginLeft = "500px";
    aboutUlpara.style.marginLeft = "300px";
    aboutUlparaB.style.marginLeft = "300px";
    aboutUlButton.style.marginLeft = "500px";
  }
  if (window.innerWidth < 1191) {
    aboutUlHeading.style.marginLeft = "450px";
    aboutUlpara.style.marginLeft = "250px";
    aboutUlparaB.style.marginLeft = "250px";
    aboutUlButton.style.marginLeft = "450px";
  }
  if (window.innerWidth < 924) {
    aboutUlHeading.style.marginLeft = "350px";
    aboutUlpara.style.marginLeft = "150px";
    aboutUlparaB.style.marginLeft = "150px";
    aboutUlButton.style.marginLeft = "300px";
  }
  if (window.innerWidth < 890) {
    aboutUlHeading.style.marginLeft = "330px";
    aboutUlpara.style.marginLeft = "120px";
    aboutUlparaB.style.marginLeft = "120px";
    aboutUlButton.style.marginLeft = "300px";
  }
  if (window.innerWidth < 835) {
    aboutUlHeading.style.marginLeft = "290px";
    aboutUlpara.style.marginLeft = "60px";
    aboutUlparaB.style.marginLeft = "60px";
    aboutUlButton.style.marginLeft = "280px";
  }
  if (window.innerWidth < 760) {
    aboutUlHeading.style.marginLeft = "250px";
    aboutUlpara.style.marginLeft = "40px";
    aboutUlparaB.style.marginLeft = "40px";
    aboutUlButton.style.marginLeft = "230px";
  }
  if (window.innerWidth < 715) {
    aboutUlHeading.style.fontSize = '30px'
    aboutUlHeading.style.marginLeft = "220px";
    aboutUlpara.style.width = "530px";
    aboutUlpara.style.fontSize = '16px'
    aboutUlparaB.style.width = "530px";
    aboutUlparaB.style.fontSize = "16px";
    aboutUlButton.style.marginLeft = "200px";
  }
  if (window.innerWidth < 670) {
    aboutUl.style.height = "500px";
    aboutUlHeading.style.fontSize = "25px";
    aboutUlHeading.style.marginTop = "-450px";
    aboutUlHeading.style.marginLeft = "230px";
    aboutUlpara.style.marginLeft = "120px";
    aboutUlpara.style.marginTop = "-400px";
    aboutUlpara.style.width = "360px";
    aboutUlparaB.style.marginLeft = "120px";
    aboutUlparaB.style.marginTop = "-260px";
    aboutUlparaB.style.width = "360px";
    aboutUlButton.style.marginLeft = "200px";
    aboutUlButton.style.marginTop = "-80px";
    aboutUlButton.style.padding = '7px'
  }
  if(window.innerWidth < 575){
    aboutUlHeading.style.marginLeft = "200px";
    aboutUlpara.style.marginLeft = "70px";
    aboutUlparaB.style.marginLeft = "70px";
    aboutUlButton.style.marginLeft = "140px";
  }
  if (window.innerWidth < 505) {
    aboutUlHeading.style.marginLeft = "150px";
    aboutUlpara.style.marginLeft = "30px";
    aboutUlparaB.style.marginLeft = "30px";
    aboutUlButton.style.marginLeft = "120px";
  }
  if (window.innerWidth < 485) {
    aboutUlHeading.style.marginLeft = "150px";
    aboutUlpara.style.marginLeft = "30px";
    aboutUlparaB.style.marginLeft = "30px";
    aboutUlButton.style.marginLeft = "100px";
  }
  if (window.innerWidth < 430) {
    aboutUlHeading.style.marginLeft = "100px";
    aboutUlpara.style.marginLeft = "5px";
    aboutUlparaB.style.marginLeft = "5px";
    aboutUlButton.style.marginLeft = "70px";
  }
   if (window.innerWidth < 407) {
     aboutUlHeading.style.marginLeft = "100px";
     aboutUlpara.style.fontSize = "13px";
     aboutUlpara.style.width = '280px'
     aboutUlparaB.style.fontSize = '13px'
     aboutUlparaB.style.width = "280px";
     aboutUlButton.style.marginLeft = "50px";
     aboutUlButton.style.fontSize = '15px'
   }
   if (window.innerWidth < 345) {
    aboutUlHeading.style.fontSize = '20px'
     aboutUlHeading.style.marginLeft = "70px";
     aboutUlpara.style.fontSize = "10px";
     aboutUlpara.style.width = "250px";
     aboutUlparaB.style.fontSize = "10px";
     aboutUlparaB.style.width = "250px";
     aboutUlButton.style.marginLeft = "90px";
     aboutUlButton.style.fontSize = "12px";
     aboutUlButton.style.width = '80px'
   }
  return aboutUl;
};
