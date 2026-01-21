let woede = 0;
let perKlik = 1;
let volgendeDrempel = 10;
let verhoging = 1;

const gezicht = document.getElementById("gezicht");
const tekst = document.getElementById("woede");
const knop = document.getElementById("verhoog");

gezicht.onclick = function () {
  woede = woede + perKlik;
  tekst.textContent = woede;

  gezicht.src = "img/trump2.png";
  setTimeout(function () {
    gezicht.src = "img/trump1.png";
  }, 300);

  //W3school
  if (woede === 1000) {
    shake();
  }

  if (woede >= volgendeDrempel) {
    knop.hidden = false;
  }
};

knop.onclick = function () {
  perKlik = perKlik + verhoging;
  knop.hidden = true;

  if (volgendeDrempel === 10) {
    volgendeDrempel = 50;
    verhoging = 2;
  } else if (volgendeDrempel === 50) {
    volgendeDrempel = 500;
    verhoging = 5;
  } else if (volgendeDrempel === 500) {
    volgendeDrempel = 2000;
    verhoging = 10;
  } else {
    volgendeDrempel = volgendeDrempel + 1000;
    verhoging = verhoging + 10;
  }
};

// Bron: https://www.w3schools.com/css/css3_animations.asp

const main = document.querySelector("main");

function shake() {
  main.classList.add("shake");

  setTimeout(function () {
    main.classList.remove("shake");
  }, 300);
}
