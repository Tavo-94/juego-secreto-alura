
let numeroSecreto = 0;

let intentos = 0;

let numerosSorteados = [];

let numeroMaximo = 10;

console.log(numeroSecreto);

function verificarIntento() {

    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    

    console.log(numeroDeUsuario === numeroSecreto);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1)?'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acerto
        limpiarCaja();
        intentos++;
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El numero secreto es menor');

        } else {
            asignarTextoElemento('p','El numero secreto es mayor');

        }
    }
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function asignarTextoElemento(elemento, texto) {
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;

}

function generarNumeroSecreto() {
    

    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;


    console.log(numeroGenerado);
    console.log(numerosSorteados);

    if (numerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p',`Ya se sortearon todos los numeros posibles`);
        return alert(`Ya se sortearon todos los numeros posibles`);
    }

    if (numerosSorteados.includes(numeroGenerado)) {
       return generarNumeroSecreto(); 
    } else {
        numerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p',`Indica un numero de el 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;

}

function reiniciarJuego() {
    //limpiar formulario
    limpiarCaja();
    //indicar mensaje de inicio
    //generar numero aleatorio
    //inicializar intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');

}

condicionesIniciales();