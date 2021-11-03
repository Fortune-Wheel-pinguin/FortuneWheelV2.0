let names = [];
let causas = [
    "TU AMIGO Y VECINO SPIDERMAN MUERE A CAUSA DEL GUANTELETE DE THANOS.",
    "ATROPELLADO POR EL AUTOBUS A 100KM/H .",
  ];
let victima = ''
let causa = ''




// Funciones para la musica de fondo
let mysong = document.getElementById("mysong")
let icon=document.getElementById("icon")
icon.onclick = function(){
    if(mysong.paused){
        mysong.play();
        icon.src = "img/play.png";  
    }else{
        mysong.pause();
        icon.src ="img/pause.png";
    }
}

// Funciones para mostrar o cerrar PopUp
function abrir(mostrar, ocultar){
    document.getElementById(mostrar).style.display = "flex"
    document.getElementById(ocultar).style.display = "none"
}
function cerrar(ocultar, mostrar){
    document.getElementById(ocultar).style.display = "none"
    document.getElementById(mostrar).style.display = "flex"
}


// Funciones añadir Victimas
function pushnames(value){
  if (inputnombres.value.length < 4 ) {
    
  } else
    names.push(value)
    mostrarnombres()
    inputnombres.value = ""
    
}

//Funcion For Loop con filtro devuelve Indice
  function rangeArray(array, filter) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] == filter) {
        return i
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
                            <button value='${elemento}'>${elemento}</button>
                            <button onclick = "borrarVictimas(this)" class = "delete" id = "borrar">X</button>
                         </li>`
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
//function impresionnombres(){
//   document.getElementById("impresionarray").innerHTML = Names;
//}

//let fps = 30;

//setInterval(function(){
//    impresionnombres()
//}, 1000/fps)


/*

// Funciones para borrar victimas
function borrarVictimaArray(victima){
    for (let i = 0; i < Names.length; i++) {
        if (victima == Names[i]) {
            Names.splice(i, 1)
            console.log(Names)
        }
    }
    console.log(Names)
}
borrarVictimaArray("hola")

function borrarVictimas(elementoThis) {
    let localizacion = document.getElementById("borrar");
    let nombreVictima = elementoThis.previousSibling;
    let elementoLi = nombreVictima.parentElement;
    //elementoLi.remove();
    borrarVictimaArray(nombreVictima)
    //console.log(typeof)
    
    //console.log(elementoLi);
}*/


// funicones de Randomizado /////////////////


//funcion numero random
function randomNum(maximo) {
    let num = Math.random() * maximo;
    let redondearNum = Math.floor(num);
    
    return redondearNum;
  }

//funcion elegir elemento de lista random
  function kill(){
    victima = names.splice(randomNum(names.length),1)[0]
    causa = causas.splice(randomNum(causas.length),1)[0]
    console.log('causa: ',causa, 'kill :',victima )
  }

// funcion fecha random
function diamuerte(){
  let dia = Math.floor(Math.random() * 30)+1;
  let mes = Math.floor(Math.random() * 13)+1;
  let año = Math.floor(Math.random() * (2025 - 2021)) + 2021;
  document.getElementById("fecha").innerHTML = `${dia} / ${mes} / ${año}`

}

//funcion imprimir elementos en el DOOM
  function imprimirEnHoja() {
    let localizacionCausa = document.querySelector('#causaMortal');
    let localizacionVictima = document.querySelector('#victima');

    localizacionCausa.innerHTML = causa;
    localizacionVictima.innerHTML = victima;
  }
  

// Funcion restablecer Arrays
  function resetAndClose(){
    cerrar('containerDN', 'inicio')
    names = []
    causas = [
      "TU AMIGO Y VECINO SPIDERMAN MUERE A CAUSA DEL GUANTELETE DE THANOS.",
      "ATROPELLADO POR EL AUTOBUS A 100KM/H .",
    ];
  }




//funcion MAIN
  function start() {
    if (names.length != 0 & causas.length != 0){
      abrir('containerDN', 'inicio')
      diamuerte()
      kill()
      imprimirEnHoja()
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