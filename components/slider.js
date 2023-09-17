const createButton = () => {
  const button = document.createElement("button");
  button.innerText = "left";
};

const createBanner = (imagePath) => {
  const child = document.createElement("img");
  child.style.width = "100%";
  child.src = imagePath;
  return child;
};

let currentIndex = 0;
const showSlide = (index, length, slideDiv) => {
  if (index < 0) {
    currentIndex = length - 1;
  } else if (index >= length) {
    currentIndex = 0;
  }
  const offset = -currentIndex * 100;
  // interacting with the DOM
  slideDiv.style.transform = `translateX(${offset}%)`;
};

export const createSlideSection = () => {
  const sliderDiv = document.createElement("div");

  sliderDiv.className = "slider";
  sliderDiv.style.display = "flex";
  sliderDiv.style.transition = "transform 0.5s ease";

  const slideChildDiv = [
    createBanner("./images/slider.jpg"),
    createBanner("./images/slider2.jpg"),
    createBanner("./images/slider3.jpg"),
    createBanner("./images/slider4.jpg"),
  ];

  setInterval(() => {
    currentIndex++;
    showSlide(currentIndex, slideChildDiv.length, sliderDiv);
  }, 3000);

  const leftButton = createButton();
  const rightButton = createButton();

  sliderDiv.append(...slideChildDiv);

  return [sliderDiv];
};
