//neural network
var network = new ParticleNetwork(document.getElementById("neural-network"), {
  background: "#fff",
  particleColor: "#0011ff",
  speed: "medium",
  density: "high",
});
network.options.particleColor = "rgba(0,200,255)";

var cards = document.getElementsByClassName("up-card");
var cardContainer = document.getElementsByClassName("up-gallery-container")[0];
var galleryPos = 0;

window.addEventListener("resize", resize);
function resize() {
  if (window.innerWidth < cards.length * 300 + 40) {
    cardContainer.style.width =
      (cards.length * (100 / Math.floor(window.innerWidth / 300))).toString() +
      "vw";
  } else {
    cardContainer.style.width = "100vw";
  }
  cardContainer.style.gridTemplateColumns = "repeat(" + cards.length + ", 1fr)";
  cardContainer.style.transform = "translateX(0)";
  galleryPos = 0;
  cardChange(-100);
  cardChange(100);
  document.getElementsByClassName("gallery-button")[0].style.clipPath =
    "circle(0% at 50% 50%)";
}

resize();

function cardChange(n) {
  if (galleryPos == -100 && n < 0) {
    document.getElementsByClassName("gallery-button")[0].style.clipPath =
      "circle(0% at 50% 50%)";
    document.getElementsByClassName("gallery-button")[1].style.clipPath =
      "polygon(20% 100%, 50% 50%, 20% 0, 90% 50%)";
    galleryPos -= n;
  } else if (
    galleryPos ==
      (Math.ceil(cards.length / Math.floor(window.innerWidth / 300)) - 2) *
        -100 &&
    n > 0
  ) {
    document.getElementsByClassName("gallery-button")[1].style.clipPath =
      "circle(0% at 50% 50%)";
    document.getElementsByClassName("gallery-button")[0].style.clipPath =
      "polygon(80% 0, 50% 50%, 80% 100%, 10% 50%)";
    galleryPos -= n;
  } else {
    document.getElementsByClassName("gallery-button")[0].style.clipPath =
      "polygon(80% 0, 50% 50%, 80% 100%, 10% 50%)";
    document.getElementsByClassName("gallery-button")[1].style.clipPath =
      "polygon(20% 100%, 50% 50%, 20% 0, 90% 50%)";
    galleryPos -= n;
  }
  cardContainer.style.transform = "translateX(" + galleryPos + "vw)";
}
