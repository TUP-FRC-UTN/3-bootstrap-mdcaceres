document.addEventListener("DOMContentLoaded", ready); 
function ready(){
    console.log("funciona");
}

let userName = document.getElementById("userName"); 
let lastName = document.getElementById("userLastName"); 
let email = document.getElementById("userEmail"); 
let birthDay = document.getElementById("userBirthDay"); 

let password = document.getElementById("userPassword"); 
let passwordValidation = document.getElementById("passwordConfirm"); 
let aboutArea = document.getElementById("userAbout"); 

function validarForm(){
    if(userName.value === "") {
        alert('El campo Nombre es requerido!');
        return false;
    }
    if(lastName.value === "") {
        alert('El campo Apellido es requerido!');
        return false;
    }
    if(email.value === "") {
        alert('El campo Email es requerido!');
        return false;
    }
    if(birthDay.value === "") {
        alert('El campo fecha de nacimiento es requerido!');
        return false;
    }
    if(password.value === "") {
        alert('El campo Contraseña es requerido!');
        return false;
    }
    if(password.value === "" || passwordValidation.value !== password.value) {
        alert('las contraseñas deben coincidir!');
        return false;
    }
}

function GuardarDatos(){
    if(validarForm())
    {
      alert('Guardando datos...');
    }
    else{
      alert('Error de validación');
    }
  }