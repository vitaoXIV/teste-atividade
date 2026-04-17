const imcService = require('./imcService');

exports.calcular = (req, res) => {
    const { peso, altura } = req.body;

    const imc = imcService.calcIMC(peso, altura);
    const classificacao = imcService.classificarIMC(imc);

    res.json({
        imc: imc.toFixed(2),
        classificacao: classificacao
    });
}
