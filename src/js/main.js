var miCadena= 'Objetos Importantes en Js'
var miCadena2= 'Mi cadena con comillas'
console.log(miCadena);
console.log(document); //DOM Document Object Model
console.log(window);

function main(){
    //Subscripciones a eventos
    var buttonSendInfo = document.querySelector('#sendInfo');
    if(buttonSendInfo){ //Validar que existe el botón enviar 
        buttonSendInfo.addEventListener('click', sendInfo)
    }
}

function sendInfo(){
    console.log('click');
    /*La función send tiene la responsabilidad de enviar la información
      pero tiene que validad la consistencia de la información*/

    //Qué? Validar Formulario
    //Cómo? Implementar un validador 
    //Validar que existe el botón de enviar información 
    /*1.- Obtener los datos/ inputs del formulario
      2.- Validarlos
      3.- Evaluar que hacer con el resultado de la validación IsValidForm true|false]*/

    var form = document.querySelector('.form');
    console.log(form); 
    if(form){
        //1
        var formInputs = document.querySelectorAll("input"); 
        console.log(formInputs);
        //Validar los inputs
        //Validar Nombre: Debe tener por lo menos 3 caracteres y y no contener caracteres especiales
        var inputName = form.querySelector('input[name=nombre]'); 
        var isValidName = true; 
        if(inputName){
            var valueName = inputName.value;
            if(valueName.length < 3)
                isValidName = false; 
            var containsSpecialChars = /[^a-zA-Z\s]/.test(valueName);
            if(containsSpecialChars)
                isValidName = false;

            if(!isValidName){
                inputName.classList.add('invalid-input'); 
            }else{
                inputName.classList.remove('invalid-input')
            }
        }
    }
}

document.addEventListener("DOMContentLoaded",main);