let btn = document.getElementById('btn');
let mensajeDeposito = document.getElementById("mensajeDeposito");
let dineroDisponible = document.getElementById("dineroDisponible");
let historialDepositos = document.getElementById("historialDepositos");

const btnRetirar = document.getElementById('btnRetirar');
const mensajeExtracciones = document.getElementById('mensajeExtracciones');
const historialExtracciones = document.getElementById('historialExtracciones');

// Obtener el historial de depósitos del Local Storage
let extracciones = JSON.parse(localStorage.getItem("extracciones")) || [];
let depositos = JSON.parse(localStorage.getItem("depositos")) || [];
let saldo = parseFloat(localStorage.getItem("saldo")) || 0;

// Función para mostrar el historial de depósitos
function mostrarDepositos() {
  historialDepositos.innerHTML = "";

  for (let i = 0; i < depositos.length; i++) {
    let deposito = depositos[i];
    let depositoElement = document.createElement("p");
    depositoElement.textContent = `Deposito N° ${i + 1}: $${deposito}`;
    historialDepositos.appendChild(depositoElement);
  }
}



function mostraExtracciones() {
  historialExtracciones.innerHTML = "";

  for (let i = 0; i < extracciones.length; i++) {
    let extraccion = extracciones[i];
    let extraccionElement = document.createElement("p");
    extraccionElement.textContent = `Extraccion N° ${i + 1}: $${extraccion}`;
    historialExtracciones.appendChild(extraccionElement);
  }
}

// Mostrar el historial y saldo disponible al cargar la página
mostrarDepositos();
mostraExtracciones();
dineroDisponible.textContent = "Dinero disponible: $" + saldo;

btn.addEventListener('click', () => {
  let dinero = document.getElementById('dineroDepositado').value;

  if (dinero !== '') {
    mensajeDeposito.textContent = "Se depositaron $" + dinero;
    document.getElementById("dineroDepositado").value = "";

    // Agregar el depósito al historial
    depositos.push(parseFloat(dinero));

    // Actualizar el historial en el Local Storage
    localStorage.setItem("depositos", JSON.stringify(depositos));

    mostrarDepositos();
  }

  setTimeout(function () {
    mensajeDeposito.textContent = "";
  }, 2000);
});

// -----------------------------------------------------


btnRetirar.addEventListener('click', ()=>{
  const dineroRetirar = document.getElementById('dineroRetirado').value;

  if (dineroRetirar !== '') {
    mensajeExtracciones.textContent = "Se extrageron $" + dineroRetirar;
    document.getElementById("dineroRetirado").value = "";

    extracciones.push(parseFloat(dineroRetirar));

    localStorage.setItem("extracciones", JSON.stringify( extracciones));
    
    mostraExtracciones()
    
  }
  setTimeout(function () {
    mensajeExtracciones.textContent = "";
  }, 2000);
  
  
})


document.addEventListener("DOMContentLoaded", function() {

  function actualizarSaldo(){

    const todosLosDepositos = depositos.reduce((a, b) => a + b, 0);
    const todosLasExtracciones = extracciones.reduce((a, b) => a + b, 0);
    const saldoFinal = todosLosDepositos - todosLasExtracciones;
    localStorage.setItem("saldo", JSON.stringify(saldoFinal));
    
    dineroDisponible.textContent = "Dinero disponible: $" + saldoFinal;

  }

  setInterval(actualizarSaldo, 1000);


})

























































