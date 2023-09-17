export const proGroupDiscus = (
  projectImgSrc,
  projectNumHtml,
  projectParaHtml,
) => {
  const projectDivA = document.createElement("div");
  projectDivA.style.width = '30%'
  projectDivA.style.margin = '100px'
  // projectDivA.style.border = '1px solid'

  const projectImg = document.createElement("img");
  projectDivA.appendChild(projectImg);
  projectImg.src = projectImgSrc;
  projectImg.style.width = "100%";

  const projectNum = document.createElement("h2");
  projectDivA.appendChild(projectNum);
  projectNum.innerHTML = projectNumHtml;
  projectNum.style.fontSize = '30px'

  const projectPara = document.createElement("p");
  projectDivA.appendChild(projectPara);
  projectPara.innerHTML = projectParaHtml;
  projectPara.style.letterSpacing = '1px'
  // Responsive------------------------------------------
  if (window.innerWidth < 1300){
    projectDivA.style.width = "40%";
    projectDivA.style.margin = "30px";
  }
  if (window.innerWidth < 1130) {
    projectDivA.style.width = "34%";
    projectDivA.style.margin = "40px";
  }
    if (window.innerWidth < 900) {
      projectDivA.style.width = "100%";
      projectDivA.style.margin = "50px";
      projectNum.style.fontSize = "20px";
    }


  return projectDivA;
};