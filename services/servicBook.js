export const servicesBooksNow = (
  servicImgSrc,
  serviHeadinHtml,
  servTimeHtml,
  servRsHtml,
  servButtonHtml
) => {
  const servUl = document.createElement("ul");
  servUl.style.width = '60%'
  servUl.style.height = '300px'
  servUl.style.marginLeft = '20%'
  servUl.style.marginTop = '90px'
  servUl.style.display = 'flex'
  servUl.style.paddingLeft = '0px'

  const servicImg = document.createElement("img");
  servUl.append(servicImg);
  servicImg.src = servicImgSrc;
  servicImg.style.width = '50%'

  const servDiv = document.createElement("div");
  servUl.appendChild(servDiv);
  servDiv.style.paddingLeft = '40px'
  servDiv.style.paddingTop = '20px'
  const serviHeadin = document.createElement("h2");
  servDiv.append(serviHeadin);
  serviHeadin.style.fontWeight = '1'
  serviHeadin.style.fontSize = '26px'


  serviHeadin.innerHTML = serviHeadinHtml;
  const servTime = document.createElement("p");
  servDiv.append(servTime);
  servTime.innerHTML = servTimeHtml;
  servTime.style.fontSize = '25px'


  const servRs = document.createElement("p");
  servDiv.append(servRs);
  servRs.innerHTML = servRsHtml;
  servRs.style.fontSize = '25px'


  const servButton = document.createElement("button");
  servDiv.append(servButton);
  servButton.innerHTML = servButtonHtml;
  servButton.style.fontSize = '20px'
  servButton.style.padding = '8px'
  servButton.style.background = 'none'
  servButton.style.cursor = 'pointer'

  if(window.innerWidth < 800){
    servUl.style.flexDirection = 'column'
    servUl.style.padding = '10px'
    servUl.style.boxShadow = '1px 1px 26px'
    servUl.style.textAlign = 'center'
    servUl.style.height = "100%";
    servicImg.style.width = '100%'
  }
  if (window.innerWidth < 560) {
    serviHeadin.style.fontSize = '20px'
  }

  return servUl;
};
