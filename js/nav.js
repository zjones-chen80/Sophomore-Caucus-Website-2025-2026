let nav = document.querySelector("nav");
let logo = document.getElementsByClassName("logo");
let pages = document.getElementsByClassName("pages");
let iconText = document.getElementsByClassName("iconText");
prevScrollZero = true;
window.addEventListener("scroll", () => {
  if (window.scrollY > 0 && prevScrollZero) {
    nav.style.background = "white";
    nav.style.color = "black";
    logo[0].style.filter = "brightness(0)";
    for (let i = 0; i < iconText.length; i++) {
      iconText[i].style.filter = "none";
    }
    prevScrollZero = false;
  } else if (window.scrollY <= 0 && !prevScrollZero) {
    nav.style.background = "transparent";
    nav.style.color = "white";
    logo[0].style.filter = "brightness(0) invert()";
    for (let i = 0; i < iconText.length; i++) {
      iconText[i].style.filter = "invert()";
    }
    prevScrollZero = true;
  }
});

window.addEventListener("resize", ChangeNav);
function ChangeNav() {
  if (window.innerWidth < 430) {
    pages[0].innerHTML = "<img class='iconText' src='/img/home-logo.png'>";
    pages[1].innerHTML = "<img class='iconText' src='/img/cabinet-logo.png'>";
    pages[2].innerHTML = "<img class='iconText' src='/img/events-logo.png'>";
    pages[3].innerHTML = "<img class='iconText' src='/img/contact-logo.png'>";
    for (let i = 0; i < iconText.length; i++) {
      iconText[i].style.filter = "invert()";
    }
  } else {
    pages[0].innerText = "HOME";
    pages[1].innerText = "CABINET";
    pages[2].innerText = "EVENTS";
    pages[3].innerText = "CONTACT";
  }
}
ChangeNav();
