let dolar = 460;
let real = 44.21;
let euro = 245.36;
let libraEsterlina = 277.11;
let yenJapones = 1.62;
let montoIngresada;
let monedaIngresada;

//usuarios existentes

const usuarios = [
    {   
        'nombre':'Ariadna',
        'apellido':'rindmond',
        'contraseña':123,
        'dinero':12341234
    },
    {
        'nombre':'marisol',
        'apellido':'maidana',
        'contraseña':1243,
        'dinero':123411234234
    },
    {
        'nombre':'penelope',
        'apellido':'estiba',
        'contraseña':123,
        'dinero':12341234
    },
    {
        'nombre':'antonella',
        'apellido':'legizamond',
        'contraseña':12342134,
        'dinero':12341234
    }

]

class Usuario {
    constructor(nombre, apellido, contraseña, dinero) {
        this.nombre = nombre
        this.apellido = apellido
        this.contraseña = contraseña
        this.dinero = dinero
    }
}

//creacion de nuevo usuario

let nombre = prompt('ingrese su nombre')
let apellido = prompt('ingrese su apellido')
let contraseña = prompt('ingrese su contraseña')
let dinero = prompt('ingrese cantidad de dinero a depositar')
const usuario = new Usuario(nombre, apellido, contraseña, dinero)
usuarios.unshift(usuario)

//Busqueda de algun usuario
let usuarioBuscado = prompt('ingrese el nombre del usuario que busca')
const usuarioEncontrado = usuarios.find(usuario=>usuario.nombre=usuarioBuscado)
alert('El usuario que usted busca es: '+usuarioEncontrado.nombre +' '+ usuarioEncontrado.apellido)



//convertidor de moneda
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
respuesta = prompt('¿quiere convertir alguna moneda?Si o no');
while(respuesta=='si'){
    montoIngresada = prompt('Ingrese a el monto del dinero que quiere convertir');
    while (isNaN(montoIngresada) || montoIngresada < 0) {
        montoIngresada = prompt('Ingrese a el monto del dinero que quiere convertir nuevamente');
    }
     monedaIngresada = prompt('¿A que moneda quiere convertir? "Dolar" "Real" "Yen" "Euro" "Libras esterlinas"').toLocaleLowerCase();
    
    while (monedaIngresada != 'dolar' && monedaIngresada != 'real' && monedaIngresada != 'yen' && monedaIngresada != 'euro' && monedaIngresada != 'libra esterlina') {
        monedaIngresada = prompt('¿A que moneda quiere convertir? "Dolar" "Real" "Yen" "Euro" "Libras esterlinas"');
    }
    alert(convertidorDeMoneda(monedaIngresada, montoIngresada));
    respuesta = prompt('Quiere convertir otra moneda?')

}
const user = document.getElementById('user')
const boton = document.getElementById('boton');
boton.addEventListener('click',()=>{
    user.innerHTML='pronto estara disponible la opcion de registrar'
})

