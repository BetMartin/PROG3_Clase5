var numeroPantalla = '';
var operador = '';
var numero1 = '';
var numero2 = '';

function seleccionarNumero(numero) {
    numeroPantalla += numero;
    document.getElementById('pantalla').value = numeroPantalla;
}

function seleccionarOperador(op) {
    numero1 = numeroPantalla;
    operador = op;
    numeroPantalla = '';
    document.getElementById('pantalla').value = '';
}

function calcular() {
    numero2 = numeroPantalla;
    var resultado = 0;

    switch(operador) {
        case '+':
            resultado = parseFloat(numero1) + parseFloat(numero2);
            break;
        case '-':
            resultado = parseFloat(numero1) - parseFloat(numero2);
            break;
        case '*':
            resultado = parseFloat(numero1) * parseFloat(numero2);
            break;
        case '/':
            resultado = parseFloat(numero1) / parseFloat(numero2);
            break;
    }

    document.getElementById('pantalla').value = resultado;
    numeroPantalla = resultado;
}

function limpiar() {
    pantalla = '';
    numero1 = '';
    numero2 = '';
    operador = '';
    document.getElementById('pantalla').value = '';
}