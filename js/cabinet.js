var photos = document.getElementsByClassName("card");
var images = [
  "Elly.jpeg",
  "Tenzin.jpeg",
  "Mark.png",
  "Roman.jpeg",
  "Brianna.jpeg",
  "Isabel.jpg",
  "Olivia.png",
  "Trevor.jpeg",
  "Tiffany.jpeg",
  "Anthony.jpeg",
  "Yubin.jpeg",
  "Rahul.jpg",
  "Junseo.jpeg",
  "Alvin.jpg",
  "Angel.jpeg",
  "Amber.png",
  "Chloe.jpeg",
  "Prabal.jpg",
  "Zinnia.jpeg",
];

for (var i = 0; i < images.length; i++) {
  photos[i].style.background = "url('/cabinet-images/" + images[i] + "')";
  photos[i].style.backgroundSize = "cover";
  photos[i].style.backgroundPosition = "center";
}

