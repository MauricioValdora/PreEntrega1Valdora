document.addEventListener("DOMContentLoaded", function () {
    // Obtener el nombre almacenado en el Local Storage
    var storedName = localStorage.getItem("nombre");

    // Obtener el elemento del mensaje de bienvenida del HTML
    var welcomeMessageElement = document.getElementById("welcomeMessage");

    // Mostrar el mensaje de bienvenida con el nombre almacenado
    welcomeMessageElement.textContent = "Hola, " + storedName + "!";

    var saldo = localStorage.getItem("dinero");

    var dineroDisponible = document.getElementById("dineroDisponible");
    
    if (saldo === null) {
        dineroDisponible.textContent = "Dinero disponible: $0";
    }else{
        dineroDisponible.textContent = "Dinero disponible: $" + saldo;
    }

});


let btn = document.getElementById('btn')
let mensajeDeposito = document.getElementById("mensajeDeposito");
btn.addEventListener('click', () => {

    let dinero = document.getElementById('dineroDepositado').value;

    localStorage.setItem("dinero", dinero);
    
  
    (dinero == '') ? '' : mensajeDeposito.textContent = "Se depositaron $" + dinero;
    
    document.getElementById("dineroDepositado").value = "";
    
    setTimeout(function () {
        mensajeDeposito.textContent = "";
    }, 2000);

    dineroDisponible.textContent = "Dinero disponible: $" + dinero;



})



