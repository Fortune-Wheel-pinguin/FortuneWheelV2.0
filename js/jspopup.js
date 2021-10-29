let Names = []

// Funciones para mostrar o cerrar PopUp
function abrirpopup(){
    document.getElementById("popup").style.display = "flex"
    document.getElementById("inicio").style.display = "none"
}
function cerrarpopup(){
    document.getElementById("popup").style.display = "none"
    document.getElementById("inicio").style.display = "flex"
}

// Funciones para la musica de fondo
let mysong=document.getElementById("mysong")
let icon=document.getElementById("icon")
icon.onclick=function(){
    if(mysong.paused){
        mysong.play();
        icon.src="img/play.png";  
    }else{
        mysong.pause();
        icon.src ="img/pause.png";
    }
}

// Funciones añadir Victimas
function pushnames(){
    Names.push(document.getElementById("inputnombres").value);
}
function mostrarnombres(){
    let localizacion = document.getElementById("impresionarray");
    let todolist = ""
    Names.forEach(elemento => {
            todolist += `<li>${elemento} <button onclick = "borrarVictimas(this)" class = "delete" id = "borrar">X</button> </li>`
    });
    localizacion.innerHTML = todolist;
}

//function impresionnombres(){
//   document.getElementById("impresionarray").innerHTML = Names;
//}

//let fps = 30;

//setInterval(function(){
//    impresionnombres()
//}, 1000/fps)




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
}
      
