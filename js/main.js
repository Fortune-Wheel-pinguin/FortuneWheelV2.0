let names = [];
let causas = [
  "TE LINCHARAN EN MASA HASTA LA MUERTE AL CONFUNDIRTE CON UN CONTRABANDISTA HUMANO.",
  "VOLCARA EL AUTOBUS EN EL QUE VIAJAS Y MORIRAS APLASTADO POR LOS DEMAS PASAJEROS.",
  "TE DESMAYARAS POR UN GOLPE EN LA CABEZA Y MORIRAS AHOGADO EN TU PROPIA SALIVA.",
  "MORIRAS CALCINADO AL CAER CERCA UNA LLUVIA DE METEORITOS.",
  "PASEANDO POR LA CALLE MORIRAS AL CAERTE ENCIMA UNA PERSONA INTENTANDO SUICIDARSE, GRACIAS A TI EL SUICIDA SOBREVIVIRA.",
  "MORIRAS TRAS GOLPEARTE LA CABEZA AL CAERTE DE LA CAMA MIENTRAS DUERMES",
  "MORIRAS POR UNA GRAVE INFECCION PROVOCADA POR UNA ESPINA DE PESCADO EN TU ESTOMAGO.",
];
let victima = "";
let causa = "";

// Funciones para la musica de fondo
let mysong = document.getElementById("mysong");
let icon = document.getElementById("icon");
icon.onclick = function () {
  if (mysong.paused) {
    mysong.play();
    icon.src = "img/play.png";
  } else {
    mysong.pause();
    icon.src = "img/pause.png";
  }
};

// Funciones para mostrar o cerrar PopUp
function abrir(mostrar, ocultar) {
  document.getElementById(mostrar).style.display = "flex";
  document.getElementById(ocultar).style.display = "none";
}
function cerrar(ocultar, mostrar) {
  document.getElementById(ocultar).style.display = "none";
  document.getElementById(mostrar).style.display = "flex";
}

// Funciones añadir Victimas
function pushnames(value) {
  if ((inputnombres.value.length >= 4) & (inputnombres.value.length <= 12)) {
    names.push(value);
    mostrarnombres();
    inputnombres.value = "";
  } else {
    inputnombres.value = "";
    alert("Nombre no válido");
  }
}

//Funcion For Loop con filtro devuelve Indice
function rangeArray(array, filter) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == filter) {
      return i;
    }
  }
}
// Funcion borrar Victimas
function borrarVictimas(elementothis) {
  let victimaABorrar = elementothis.previousElementSibling.value;
  let index = rangeArray(names, victimaABorrar);

  names.splice(index, 1);

  mostrarnombres();
}

// funcion Imprimir en popUp
function mostrarnombres() {
  let localizacion = document.getElementById("impresionarray");
  let todolist = "";
  names.forEach((elemento) => {
    todolist += `<li>
                            <button class="btnname" value='${elemento.toUpperCase()}'>${elemento.toUpperCase()}</button>
                            <button onclick = "borrarVictimas(this)" class = "delete" id = "borrar">X</button>
                         </li>`;
  });
  localizacion.innerHTML = todolist;
}
///ENTER/////
document
  .getElementById("inputnombres")
  .addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
      document.getElementById("sub").click();
    }
  });

//funcion numero random
function randomNum(maximo) {
  let num = Math.random() * maximo;
  let redondearNum = Math.floor(num);

  return redondearNum;
}

//funcion elegir elemento de lista random
function kill() {
  victima = names.splice(randomNum(names.length), 1)[0];
  causa = causas.splice(randomNum(causas.length), 1)[0];
  console.log("causa: ", causa, "kill :", victima);
}

// funcion fecha random
function diamuerte() {
  let dia = Math.floor(Math.random() * 30) + 1;
  let mes = Math.floor(Math.random() * 13) + 1;
  let año = Math.floor(Math.random() * (2025 - 2021)) + 2021;
  document.getElementById("fecha").innerHTML = `${dia} / ${mes} / ${año}`;
}

//funcion imprimir elementos en el DOOM
function imprimirEnHoja() {
  let localizacionCausa = document.querySelector("#causaMortal");
  let localizacionVictima = document.querySelector("#victima");

  localizacionCausa.innerHTML = causa.toUpperCase();
  localizacionVictima.innerHTML = victima.toUpperCase();
}

// Funcion restablecer Arrays
function resetAndClose() {
  cerrar("containerDN", "inicio");
  names = [];
  causas = [
    "TE LINCHARAN EN MASA HASTA LA MUERTE AL CONFUNDIRTE CON UN CONTRABANDISTA HUMANO.",
    "VOLCARA EL AUTOBUS EN EL QUE VIAJAS Y MORIRAS APLASTADO POR LOS DEMAS PASAJEROS.",
    "TE DESMAYARAS POR UN GOLPE EN LA CABEZA Y MORIRAS AHOGADO EN TU PROPIA SALIVA.",
    "MORIRAS CALCINADO AL CAER CERCA UNA LLUVIA DE METEORITOS.",
    "PASEANDO POR LA CALLE MORIRAS AL CAERTE ENCIMA UNA PERSONA INTENTANDO SUICIDARSE, GRACIAS A TI EL SUICIDA SOBREVIVIRA.",
    "MORIRAS TRAS GOLPEARTE LA CABEZA AL CAERTE DE LA CAMA MIENTRAS DUERMES",
    "MORIRAS POR UNA GRAVE INFECCION PROVOCADA POR UNA ESPINA DE PESCADO EN TU ESTOMAGO.",
  ];

  mostrarnombres();
}

//funcion MAIN
function start() {
  if ((names.length != 0) & (causas.length != 0)) {
    abrir("containerDN", "inicio");
    diamuerte();
    kill();
    imprimirEnHoja();
  }
}
/*
console.log(names)
pushnames('cosaPureuna')
console.log(names)
//kill()
console.log(names)
console.log(victima)
*/
