let Names = []

//function impresionnombres(){
//   document.getElementById("impresionarray").innerHTML = Names;
//}


function pushnames(){
    Names.push(document.getElementById("inputnombres").value);
}


//let fps = 30;

//setInterval(function(){
//    impresionnombres()
//}, 1000/fps)

function mostrarnombres(){
    let localizacion = document.getElementById("impresionarray");
    let todolist = ""
    Names.forEach(elemento => {
            todolist += `<li>${elemento}</li>`
    });
    localizacion.innerHTML = todolist;
}
function abrirpopup(){
    document.getElementById("popup").style.display = "flex"
    document.getElementById("inicio").style.display = "none"
}
function cerrarpopup(){
    document.getElementById("popup").style.display = "none"
    document.getElementById("inicio").style.display = "flex"
}
