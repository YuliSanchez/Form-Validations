var miCadena= 'Objetos Importantes en Js'
var miCadena2= 'Mi cadena con comillas'
console.log(miCadena);
console.log(document); //DOM Document Object Model
console.log(window);
import { Validator} from "./common/validations.js";

var validator =  new Validator();

function main(){
    //Subscripciones a eventos
    var buttonSendInfo = document.querySelector('#sendInfo');
    if(buttonSendInfo){ //Validar que existe el botón enviar 
        buttonSendInfo.addEventListener('click', sendInfo)
    }
}

function setElementValidationClass(element, isValid){
    isValid === true ? element.classList.remove('invalid-input') : element.classList.add('invalid-input');
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
        if(inputName){
            var valueName = inputName.value;
            var isValidName = validator.validateProperName(valueName);
            setElementValidationClass(inputName, isValidName)
        }

        //Validar Apellido
        var inputApellido = form.querySelector('input[name=apellido]'); 
        if(inputApellido){
            var valueApellido = inputApellido.value;
            var isValidApellido = validator.validateProperName(valueApellido)
            setElementValidationClass(inputApellido, isValidApellido); 
        }
    }
}

document.addEventListener("DOMContentLoaded",main);