let names = [];
let causas = [
  "TE LINCHARÁN EN MASA HASTA LA MUERTE AL CONFUNDIRTE CON UN CONTRABANDISTA HUMANO.",
  "VOLCARÁ EL AUTOBÚS EN EL QUE VIAJAS Y MORIRÁS APLASTADO POR LOS DEMÁS PASAJEROS.",
  "TE DESMAYARÁS POR UN GOLPE EN LA CABEZA Y MORIRÁS AHOGADO EN TU PROPIA SALIVA.",
  "MORIRÁS CALCINADO AL CAER CERCA UNA LLUVIA DE METEORITOS.",
  "PASEANDO POR LA CALLE MORIRÁS AL CAERTE ENCIMA UNA PERSONA INTENTANDO SUICIDARSE, GRACIAS A TÍ EL SUICIDA SOBREVIVIRÁ.",
  "MORIRÁS TRAS GOLPEARTE LA CABEZA AL CAERTE DE LA CAMA MIENTRAS DUERMES",
  "MORIRÁS POR UNA GRAVE INFECCIÓN PROVOCADA POR UNA ESPINA DE PESCADO EN TU ESTÓMAGO.",
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
function pushnames(value){
  if (inputnombres.value.length >= 4 & inputnombres.value.length <= 12) {
    names.push(value)
    mostrarnombres()
    inputnombres.value = ""
  }
  else{
  inputnombres.value = ""
  alert("Nombre no válido")
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
function borrarVictimas(elementothis){
  let victimaABorrar = elementothis.previousElementSibling.value
  let index = rangeArray(names, victimaABorrar)

  names.splice(index, 1)

  mostrarnombres()
}

// funcion Imprimir en popUp
function mostrarnombres(){
    let localizacion = document.getElementById("impresionarray");
    let todolist = ""
    names.forEach(elemento => {
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
  function resetAndClose(){
    cerrar('containerDN', 'inicio')
    names = []
    causas = [
      "TU AMIGO Y VECINO SPIDERMAN MUERE A CAUSA DEL GUANTELETE DE THANOS.",
      "ATROPELLADO POR EL AUTOBUS A 100KM/H .",
    ];
    mostrarnombres()
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
