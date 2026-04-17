exports.calcIMC = (peso, altura) => {
    return peso / (altura * altura);
}

exports.classificarIMC = (imc) => {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 25) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        return "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        return "Obeso grau 1";
    } else if (imc >= 35 && imc < 40) {
        return "Obeso grau 2";
    } else {
        return "Obeso grau 3";
    }
}