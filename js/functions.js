const dice = document.querySelector("#dice");
const images = [
  "./img/1.png",
  "./img/2.png",
  "./img/3.png",
  "./img/4.png",
  "./img/5.png",
  "./img/6.png"
];

dice.addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];
  const img = document.querySelector("#dice img");
  img.src = randomImage;
});