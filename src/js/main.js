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
    
    //Subscripciones a eventos
    var buttonSendInfo = document.querySelector('#sendInfo');
    if(buttonSendInfo){ //Validar que existe el botón enviar 
        buttonSendInfo.addEventListener('click', sendInfo)
    }
}

function sendInfo(){
    console.log('click');
    //Validar la información de todo el formulario
    var form = document.querySelector('.form');
    console.log(form); 
    if(form){
        var formInputs = document.querySelectorAll("input"); 
        console.log(formInputs);
    }
}

document.addEventListener("DOMContentLoaded",main);