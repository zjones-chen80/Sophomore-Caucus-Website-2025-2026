var photos = document.getElementsByClassName("card");
var images = [
  "Elly.jpeg",
  "Tenzin.jpeg",
  "Mark.png",
  "pfp.jpeg",
  "Brianna.jpeg",
  "Isabel.jpg",
  "pfp.jpg",
  "Trevor.jpeg",
  "Tiffany.jpeg",
  "Anthony.jpeg",
  "Yubin.jpeg",
  "Rahul.jpg",
  "Junseo.jpeg",
  "pfp.jpeg",
  "Angel.jpeg",
  "Amber.png",
  "Chloe.jpeg",
  "pfp.jpg",
  "Zinnia.jpeg",
];

for (var i = 0; i < images.length; i++) {
  photos[i].style.background = "url('/cabinet-images/" + images[i] + "')";
  photos[i].style.backgroundSize = "cover";
  photos[i].style.backgroundPosition = "center";
}
