document.getElementById('calcular').addEventListener('click', calculo);

function calculo() {
    const peso = document.getElementById('peso').value;
    let volumen, mantenimiento, mantenimientoYMedio;
    if (peso <= 0) {
        mensajes(true);
    } else if (peso <= 30) {
        volumen = calcularVolumenHolliday(peso);
        mantenimiento = volumen / 24;
        mantenimientoYMedio = mantenimiento * 1.5;
        mostrarResultados(mantenimiento, mantenimientoYMedio, 'Mantenimiento', 'Mantenimiento + m/2');
    } else {
        const { volumen1500, volumen2000 } = calcularVolumenSuperficieCorporal(peso);
        mostrarResultados(volumen1500, volumen2000, 'Volumen * 1500', 'Volumen * 2000');
    }
}

function calcularVolumenHolliday(peso) {
    if (peso <= 10) {
        return peso * 100;
    } else if (peso > 10 && peso <= 20) {
        return 1000 + ((peso - 10) * 50);
    } else {
        return 1500 + ((peso - 20) * 20);
    }
}

function calcularVolumenSuperficieCorporal(peso) {
    const superficieCorporal = (((peso * 4) + 7) / (peso + 90));
    return {
        volumen1500: superficieCorporal * 1500, volumen2000: superficieCorporal * 2000
    };
}

function mostrarResultados(res_arriba, res_abajo, etiqueta1, etiqueta2) {
    document.getElementById('man').innerHTML = `${etiqueta1}= ${Math.round(res_arriba)} cc/hs`;
    document.getElementById('manymedio').innerHTML = `${etiqueta2}= ${Math.round(res_abajo)} cc/hs`;
    mensajes(false);
}

function mensajes(mostrarError) {
    document.getElementById('error').style.display = mostrarError ? 'block' : 'none';
    document.getElementById('man').style.display = mostrarError ? 'none' : 'block';
    document.getElementById('manymedio').style.display = mostrarError ? 'none' : 'block';
}