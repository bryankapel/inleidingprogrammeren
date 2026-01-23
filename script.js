let woede = 0;
let perKlik = 1;
let volgendeDrempel = 10;
let verhoging = 1;

const woedeDrempels = [100, 150, 200, 300];

const gezicht = document.getElementById("gezicht");
const tekst = document.getElementById("woede");
const knop = document.getElementById("verhoog");
const why = new Audio("Voicy_Why.mp3");

gezicht.onclick = function () {
  woede = woede + perKlik;
  tekst.textContent = woede;

  gezicht.src = "img/trump2.png";
  setTimeout(function () {
    gezicht.src = "img/trump1.png";
  }, 300);

  if (woede >= woedeDrempels[0] && woede < woedeDrempels[1]) {
  shake();
  }

  else if (woede >= woedeDrempels[1] && woede < woedeDrempels[2]) {
    shake_heavy();
  }

  else if (woede >= woedeDrempels[2]) {
    shake_super_heavy();
  }

  if (woede >= volgendeDrempel) {
    knop.hidden = false;
  }
};

knop.onclick = function () {
  perKlik = perKlik + verhoging;
  knop.hidden = true;
  why.play();

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

function shake_heavy() {
  main.classList.add("shake_heavy");

  setTimeout(function () {
    main.classList.remove("shake_heavy");
  }, 300);
}

function shake_super_heavy() {
  main.classList.add("shake_super_heavy");

  setTimeout(function () {
    main.classList.remove("shake_super_heavy");
  }, 300);
}
