export const createSectionChild = (heading, paragraphData, chiledBtnHkg) => {
  const parentDiv = document.createElement("div");
  const childArr = [];

  const childHeading = document.createElement("h2");
  childHeading.innerHTML = heading;
  childHeading.style.fontWeight = "100";
  childHeading.style.fontSize = "30px";

  const childPara = document.createElement("p");
  childPara.innerHTML = paragraphData;
  childPara.style.width = "252px";

  const childButton = document.createElement("Button");
  childButton.innerHTML = "More Info";
  childButton.style.fontSize = "20px";
  childButton.style.fontWeight = "100";
  childButton.style.backgroundColor = "#fff";
  childButton.style.padding = "5px";
  childButton.style.cursor = "pointer";
  childButton.style.transition = "all 2s";

  childButton.addEventListener("mouseover", function () {
    childButton.style.backgroundColor = "#008080";
    childButton.style.color = "#fff";
  });

  childButton.addEventListener("mouseout", function () {
    childButton.style.backgroundColor = "#fff";
    childButton.style.color = "#008080";
  });

  // pushing all children element
  childArr.push(childHeading);
  childArr.push(childPara);
  childArr.push(childButton);
  parentDiv.append(...childArr);

  // responsive--------------------------------
  if (window.innerWidth < 1350) {
    childHeading.style.fontSize = "25px";
    childPara.style.width = "202px";
  }
  if (window.innerWidth < 855) {
    childHeading.style.fontSize = "25px";
    childPara.style.width = "202px";
  }
  if (window.innerWidth < 760) {
    childHeading.style.fontSize = "20px";
    childPara.style.width = "190px";
  }
  if (window.innerWidth < 715) {
    childHeading.style.fontSize = "20px";
    childPara.style.width = "150px";
    childPara.style.fontSize = "10px";
    childButton.style.fontSize = "15px";
  }
  if (window.innerWidth < 624) {
    childPara.style.width = "135px";
  }
  if (window.innerWidth < 580) {
    childPara.style.width = "120px";
  }
  if (window.innerWidth < 455) {
    childHeading.style.fontSize = "25px";
    childPara.style.width = "360px";
    childPara.style.fontSize = "15px";
    childButton.style.padding = "6px";
    childButton.style.fontSize = "20px";
    childButton.style.width = "140px";
  }
  if (window.innerWidth < 425) {
    parentDiv.style.marginLeft = "-20px";
  }
  if (window.innerWidth < 373) {
    childPara.style.width = "250px";
    childPara.style.marginLeft = "20px";
    childButton.style.marginLeft = "90px";
  }
  if (window.innerWidth < 345) {
    childPara.style.width = "220px";
    childPara.style.fontSize = "10px";
    childPara.style.marginLeft = "40px";
    childHeading.style.fontSize = "20px";
    childButton.style.fontSize = "10px";
    childButton.style.width = "100px";
  }
  if (window.innerWidth < 311) {
    childPara.style.marginLeft = "20px";
    childButton.style.marginLeft = "65px";
  }

  return parentDiv;
};
