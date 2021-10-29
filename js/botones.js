function borrarVictimas(elementoThis) {
    let localizacion = document.getElementById("borrar");
    let nombreVictima = elementoThis.previousSibling;
    let elementoLi = nombreVictima.parentElement;
    elementoLi.remove();
  
    
    //console.log(elementoLi);
  }
  