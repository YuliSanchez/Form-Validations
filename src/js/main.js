var miCadena= 'Objetos Importantes en Js'
var miCadena2= 'Mi cadena con comillas'
console.log(miCadena);
console.log(document); //DOM Document Object Model
console.log(window);

function main(){
    console.log("All html are loaded; The Document is fully loaded and parsed!"); 

    var nombre = document.querySelector('input[name=nombre]'); 
    var nombreByID = document.getElementById('nombre');
    
    console.log(nombre);
    console.log(nombreByID); 
}

function send(){
    console.log('click');
}

document.addEventListener("DOMContentLoaded",main);