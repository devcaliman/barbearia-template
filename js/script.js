const imagemHero = document.getElementById("imagem-hero");

const banners = [
  "images/banner1.png",
  "images/banner2.png",
  "images/banner3.png"
];

let indice = 0;

setInterval(() => {
  imagemHero.style.opacity = 0;

  setTimeout(() => {
    indice++;
    if (indice >= banners.length) {
      indice = 0;
    }

    imagemHero.src = banners[indice];
    imagemHero.style.opacity = 1;
  }, 450);
}, 4200);