
let dolar = 460;
let real = 44.21;
let euro = 245.36;
let libraEsterlina = 277.11;
let yenJapones = 1.62;
let montoIngresada;
let monedaIngresada;

function convertidorDeMoneda(monedaIngresada, montoIngresada) {
    switch (monedaIngresada) {
        case 'dolar':
            valorFinal = montoIngresada / dolar;
            return valorFinal.toFixed(2) + ' dolares';

        case 'real':
            valorFinal = montoIngresada / real;
            return valorFinal.toFixed(2) + ' reales';

        case 'euro':
            valorFinal = montoIngresada / euro;
            return valorFinal.toFixed(2) + ' euros';

        case 'libra esterlina':
            valorFinal = montoIngresada / libraEsterlina;
            return valorFinal.toFixed(2) + ' libras esterlinas';

        case 'yen':
            valorFinal = montoIngresada / yenJapones;
            return valorFinal.toFixed(2) + ' yenes';

        default:
            return 'ingrese alguna moneda de las posibles'

    }
}
do {
    montoIngresada = prompt('Ingrese a el monto del dinero que quiere convertir');
    while (isNaN(montoIngresada) || montoIngresada < 0) {
        montoIngresada = prompt('Ingrese a el monto del dinero que quiere convertir nuevamente');
    }
     monedaIngresada = prompt('¿A que moneda quiere convertir? "Dolar" "Real" "Yen" "Euro" "Libras esterlinas"').toLocaleLowerCase();
    
    while (monedaIngresada != 'dolar' && monedaIngresada != 'real' && monedaIngresada != 'yen' && monedaIngresada != 'euro' && monedaIngresada != 'libra esterlina') {
        monedaIngresada = prompt('¿A que moneda quiere convertir? "Dolar" "Real" "Yen" "Euro" "Libras esterlinas"');
    }
    alert(convertidorDeMoneda(monedaIngresada, montoIngresada));
    respuesta = prompt('¿quiere seguir convirtiendo?Si o no');

} while (respuesta != 'no')




