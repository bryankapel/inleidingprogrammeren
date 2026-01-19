let woede = 0;
let perKlik = 1;
let volgendeDrempel = 10; 
let verhoging = 1;

let gezicht = document.getElementById("gezicht");
let tekst = document.getElementById("woede");
let knop = document.getElementById("verhoog");

gezicht.onclick = function() {
  woede = woede + perKlik;
  tekst.textContent = woede;

  gezicht.src = "img/trump2.png";
  setTimeout(function() {
    gezicht.src = "img/trump1.png";
  }, 300);

  if (woede >= volgendeDrempel) {
    knop.hidden = false;
  }
}

knop.onclick = function() {
  perKlik = perKlik + verhoging; 
  knop.hidden = true; 

  if (volgendeDrempel == 10) {
    volgendeDrempel = 50;
    verhoging = 2;
  } else if (volgendeDrempel == 50) {
    volgendeDrempel = 500;
    verhoging = 5;
  } else if (volgendeDrempel == 500) {
    volgendeDrempel = 2000;
    verhoging = 10;
  } else {
    volgendeDrempel = volgendeDrempel + 1000;
    verhoging = verhoging + 10;
  }
}



