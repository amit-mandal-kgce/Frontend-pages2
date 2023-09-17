export const ourTeamExport = (
  ourTeamImgSre,
  ourTeamNamehtml,
  ourTeamWorkHtml,
  ourTeamParaHtml,
) => {
//   ----------xxxxxxxxxxx---------------
  const ourTeamDiv = document.createElement("div");
  ourTeamDiv.style.width = "30%";
  ourTeamDiv.style.marginLeft = "12%";
  ourTeamDiv.style.border = '1px solid'
  ourTeamDiv.style.marginTop = "30px";

  const ourTeamImg = document.createElement("img");
  ourTeamDiv.appendChild(ourTeamImg);
  ourTeamImg.src = ourTeamImgSre;
  ourTeamImg.style.width = "100%";

  const ourTeamName = document.createElement("p");
  ourTeamDiv.appendChild(ourTeamName);
  ourTeamName.innerHTML = ourTeamNamehtml;
  ourTeamName.style.fontSize = "30px";

  const ourTeamWork = document.createElement("p");
  ourTeamDiv.appendChild(ourTeamWork);
  ourTeamWork.innerHTML = ourTeamWorkHtml;
  ourTeamWork.style.fontSize = "20px";
  ourTeamWork.style.fontWeight = "bold";

  const ourTeamPara = document.createElement("p");
  ourTeamDiv.appendChild(ourTeamPara);
  ourTeamPara.innerHTML = ourTeamParaHtml;
  ourTeamPara.style.width = "100%";
  // --------------------Responsive-----------------------
  if(window.innerWidth < 550){
    ourTeamDiv.style.width = "70%";
    ourTeamDiv.style.marginLeft = "10px";
  }
  return [ourTeamDiv];
};