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



