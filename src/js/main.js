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

function setElementValidationStatus(input, validationResult) {

    let messageElement = input.previousElementSibling;
    if(validationResult.isValid){
        input.classList.remove('invalid-input');
        messageElement.innerHTML = "";
        messageElement.classList.add('d-none');
    }else{
        input.classList.add('invalid-input');
        messageElement.innerHTML = validationResult.message;
        messageElement.classList.remove('d-none');
    }
}

//obtener los inputs de un form y validarlos
function validateFormBySelector(formSelector) {
    let currentForm = document.querySelector(formSelector);
    let isValidForm = true;
    if (currentForm) {
        let inputs = currentForm.querySelectorAll('input');
        inputs.forEach((input) => {
            let inputType = input.name;
            switch (inputType) {
                case 'nombre':
                case 'apellido':
                    let validationProperNameResult = validator.validateProperName(input.value);
                    setElementValidationStatus(input,validationProperNameResult);
                    isValidForm = isValidForm && validationProperNameResult.isValid;
                    break;
                case 'email':
                    let validationEmailResult = validator.validateEmail(input.value);
                    setElementValidationStatus(input,validationEmailResult);
                    isValidForm = isValidForm && validationEmailResult.isValid;
                    break;
                case 'curp':
                    let validationCURPResult = validator.validateCURP(input.value);
                    setElementValidationStatus(input,validationCURPResult);
                    isValidForm = isValidForm && validationCURPResult.isValid;
                    break;
                case 'rfc':
                    let validationRFCResult = validator.validateRFC(input.value);
                    setElementValidationStatus(input,validationRFCResult);
                    isValidForm = isValidForm && validationRFCResult.isValid;
                    break;
            }
        });
    }

    return isValidForm;
}

function sendInfo(){

    let isValidForm = validateFormBySelector('.form'); 
    console.log('isValidForm: ' + isValidForm);
    if(isValidForm){

    }else{

    }
}

document.addEventListener("DOMContentLoaded",main);