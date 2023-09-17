export const planImportSection = (
  planHeadHtml,
  planRsLogoHtml,
  planRsHtml,
  planBusHtml,
  plansParaTwoHtml,
  planButtonHtml
) => {
  //   --------------------------------------------------
  const planDivFir = document.createElement("div");
  planDivFir.style.padding = "6px";
  planDivFir.style.textAlign = "center";
  planDivFir.style.width = "30%";
  planDivFir.style.border = '1px solid'
  planDivFir.style.margin = '10px'

  const planHead = document.createElement("h2");
  planDivFir.appendChild(planHead);
  planHead.innerHTML = planHeadHtml;
  planHead.style.fontWeight = "100";
  //   --------------------------------------------
  const planLi = document.createElement("ul");
  planDivFir.appendChild(planLi);
  planLi.style.display = "flex";
  planLi.style.marginTop = "-30px";

  const planRsLogo = document.createElement("p");
  planLi.appendChild(planRsLogo);
  planRsLogo.innerHTML = planRsLogoHtml;
  planRsLogo.style.fontSize = "26px";

  const planRs = document.createElement("p");
  planLi.appendChild(planRs);
  planRs.innerHTML = planRsHtml;
  planRs.style.fontSize = "46px";

  // -----------------------------------------------
  const planBus = document.createElement("p");
  planDivFir.appendChild(planBus);
  planBus.innerHTML = planBusHtml;

  const plansParaTwo = document.createElement("p");
  planDivFir.appendChild(plansParaTwo);
  plansParaTwo.innerHTML = plansParaTwoHtml;

  const planButton = document.createElement("button");
  planDivFir.appendChild(planButton);
  planButton.innerHTML = planButtonHtml;
  planButton.style.padding = "10px";
  planButton.style.width = "200px";
  planButton.style.backgroundColor = "#00BFFF";
  planButton.style.border = ".1px solid #000";
  planButton.style.color = "#fff";

  planButton.addEventListener("mouseenter", () => {
    planButton.style.backgroundColor = "#87CEFA";
  });
  planButton.addEventListener("mouseleave", () => {
    planButton.style.backgroundColor = "#00BFFF";
  });

  if(window.innerWidth < 1465){
    planLi.style.textAlign = "center";
    planDivFir.style.width = "40%";
    planDivFir.style.margin = "20px";
  }
  if (window.innerWidth < 1265) {
    planDivFir.style.width = '40%'
  }
  if (window.innerWidth < 855) {
    planDivFir.style.width = "100%";
    planDivFir.style.margin = "30px";
    planDivFir.style.padding = '15px'
    planDivFir.style.boxShadow = '1px 1px 25px'
  }

  return planDivFir;
};
