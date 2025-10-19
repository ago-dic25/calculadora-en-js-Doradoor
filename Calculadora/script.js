var historial = [];

function calcular(operacion) {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var resultado = document.getElementById('resultado');

    if (num1 === '' || num2 === '') {
        resultado.innerHTML = '<span class="error">Ingresa ambos numeros</span>';
        return;
    }

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    var res;
    var simbolo;

    if (operacion === 'sumar') {
        res = num1 + num2;
        simbolo = '+';
    } else if (operacion === 'restar') {
        res = num1 - num2;
        simbolo = '-';
    } else if (operacion === 'multiplicar') {
        res = num1 * num2;
        simbolo = 'x';
    } else if (operacion === 'dividir') {
        if (num2 === 0) {
            resultado.innerHTML = '<span class="error">No se puede dividir entre 0</span>';
            return;
        }
        res = num1 / num2;
        simbolo = '/';
    }

    resultado.innerHTML = 'Resultado: ' + res;

    var registro = num1 + ' ' + simbolo + ' ' + num2 + ' = ' + res;
    historial.push(registro);
    actualizarLog();
}

function actualizarLog() {
    var logDiv = document.getElementById('log');
    
    if (historial.length === 0) {
        logDiv.innerHTML = '<div class="log-empty">Sin calculos</div>';
    } else {
        logDiv.innerHTML = '';
        for (var i = historial.length - 1; i >= 0; i--) {
            var item = document.createElement('div');
            item.className = 'log-item';
            item.textContent = historial[i];
            logDiv.appendChild(item);
        }
    }
}