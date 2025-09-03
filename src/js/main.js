var miCadena= 'Objetos Importantes en Js'
var miCadena2= 'Mi cadena con comillas'
console.log(miCadena);
console.log(document); //DOM Document Object Model
console.log(window);
import {Validator} from "./common/validations.js";
import {Person} from "./models/person.model.js";
import {ManageStyleClass} from "./common/manageStyleClass.js";

var validator =  new Validator();
var manageStyleClass = new ManageStyleClass();

function main(){

    getClassStatus();
    //Subscripciones a eventos
    let buttonSendInfo = document.querySelector('#sendInfo');
    if(buttonSendInfo){ //Validar que existe el botón enviar 
        buttonSendInfo.addEventListener('click', sendInfo)
    }

    let name = document.querySelector('input[name=nombre]');
    if(name){
        name.addEventListener('keydown',function(event){
            let validationProperNameResult = validator.validateProperName(name.value);
            setElementValidationStatus(name, validationProperNameResult);
        });
    }

}

function getClassStatus(){
    let divButtons = document.getElementById('buttons-status');
    let buttons = divButtons.querySelectorAll("button");
    
    buttons.forEach((button)=>{
        let buttonStatus =button.innerText; 
        //console.log(buttonStatus);
        let statusClass = manageStyleClass.getClassStatus(buttonStatus);
        button.classList.add(statusClass); 
    })
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
    //Send Information
    //Construir objeto persona y mandarlo al backend
    //Mostrar al usuario algo que represente que se esta procesando la información
    let currentForm = document.querySelector('.form');
    currentForm.classList.add('d-none');
    let processingInfoElement = document.querySelector('.processing-info');
    processingInfoElement.classList.remove('d-none');

    let name = document.querySelector('input[name=nombre]');
    let lastName = document.querySelector('input[name=apellido]');
    let email = document.querySelector('input[name=email]');
    let personID = document.querySelector('input[name=curp]');
    let taxID = document.querySelector('input[name=rfc]');
    let newPerson = new Person(name.value, lastName.value, email.value, personID.value, taxID.value);
    console.log(newPerson);

    //Poner valores en atributo valor
    document.querySelector('#infoName').innerHTML = newPerson.name;
    document.querySelector('#infoLastName').innerHTML = newPerson.lastName;
    document.querySelector('#infoEmail').innerHTML = newPerson.email;
    document.querySelector('#infoPersonID').innerHTML = newPerson.personID;
    document.querySelector('#infoTaxID').innerHTML = newPerson.taxID;



    //Simulación que después de 3 segundos  se muestra nuevamente el formulario
    setTimeout(function(){
        //limpiar formulario
        name.value="";
        lastName.value="";
        email.value="";
        personID.value="";
        taxID.value="";

        //limpiar valores en etiquetas
        document.querySelector('#infoName').innerHTML = "";
        document.querySelector('#infoLastName').innerHTML = "";
        document.querySelector('#infoEmail').innerHTML = "";
        document.querySelector('#infoPersonID').innerHTML = "";
        document.querySelector('#infoTaxID').innerHTML = "";

        currentForm.classList.remove('d-none');
        processingInfoElement.classList.add('d-none');
    },3000);

    }else{

    }
}

document.addEventListener("DOMContentLoaded",main);