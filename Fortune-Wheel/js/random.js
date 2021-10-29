let causas = [
  "tu amigo y vecino spiderman muere a causa del guantele de thanos.",
  "Atropellado por el autobus a 100km/h",
];

let victimas = ["pera", "manzana", "limon"];

function randomNum(maximo) {
  let num = Math.random() * maximo;
  let redondearNum = Math.floor(num);

  return redondearNum;
}

function imprimirVictima(identificador, lista) {
  let localizacion = document.querySelector(identificador);
  let indiceRandom = randomNum(lista.length);
  let nombreRandom = lista[indiceRandom];

  let html = nombreRandom;

  localizacion.innerHTML = html;
}
imprimirVictima("#victima", victimas);
imprimirVictima("#causaMortal", causas);

function diamuerte(){
  let dia = Math.floor(Math.random() * 32)+1;
  let mes = Math.floor(Math.random() * 13)+1;
  let año = Math.floor(Math.random() * (2025 - 2021)) + 2021;
  document.getElementById("fecha").innerHTML = `${dia}${mes}${año}`

}