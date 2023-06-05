let saldo = parseFloat(localStorage.getItem("dinero")) || 0; // Parsear el saldo como número y establecerlo en 0 si no existe

let btn = document.getElementById('btn');
let mensajeDeposito = document.getElementById("mensajeDeposito");
let dineroDisponible = document.getElementById("dineroDisponible");

document.addEventListener("DOMContentLoaded", function () {
    var storedName = localStorage.getItem("nombre");
    var welcomeMessageElement = document.getElementById("welcomeMessage");
    welcomeMessageElement.textContent = "Hola, " + storedName + "!";

    dineroDisponible.textContent = "Dinero disponible: $" + saldo;
});

btn.addEventListener('click', () => {
    let dinero = document.getElementById('dineroDepositado').value;

    if (dinero !== '') {
        mensajeDeposito.textContent = "Se depositaron $" + dinero;
        document.getElementById("dineroDepositado").value = "";

        saldo += parseFloat(dinero); // Sumar el dinero depositado al saldo existente

        // Actualizar el saldo en el Local Storage
        localStorage.setItem("dinero", saldo);

        dineroDisponible.textContent = "Dinero disponible: $" + saldo;
    }

    setTimeout(function () {
        mensajeDeposito.textContent = "";
    }, 2000);
});



