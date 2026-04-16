exports.calcIMC = (peso, altura) => {
    return peso / (altura * altura);
}

exports.classificarIMC(peso, altura) {
    const imc = this.calcIMC(peso, altura);
}