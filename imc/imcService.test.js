const imcService = require('./imcService');

describe('Testes Unitários do IMC', () => {
    
    describe('calcIMC', () => {
        test('Alimente a função com dados padrões (ex: 70kg e 1.75m)', () => {
            const resultado = imcService.calcIMC(70, 1.75);
            expect(resultado).toBeCloseTo(22.86, 2);
        });

        test('Como a sua aplicação lidaria com exceções (altura igual a zero ou peso negativo)', () => {
            const resultado = imcService.calcIMC(-10, 1.75);
            expect(resultado).toBeLessThan(0);
        });
    });

    describe('classificarIMC e Muting de Ramificações (Branch Coverage)', () => {
        
        test('Crie um teste de avaliação para CADA classificação possível', () => {
            expect(imcService.classificarIMC(17)).toBe('Abaixo do peso');
            expect(imcService.classificarIMC(18.47)).toBe('Abaixo do peso');
            expect(imcService.classificarIMC(24.9)).toBe('Peso normal');
        });

        test('Crie os testes voltados aos "valores de contorno" ou limites. O que aconteceria se o Imc for 18.42 ou 18.5 exatos? E em 24.9 ou 25?', () => {
            expect(imcService.classificarIMC(18.4)).toBe('Abaixo do peso');
            expect(imcService.classificarIMC(18.5)).toBe('Peso normal');
            expect(imcService.classificarIMC(24.9)).toBe('Peso normal');
            expect(imcService.classificarIMC(25)).toBe('Sobrepeso');
            expect(imcService.classificarIMC(29.9)).toBe('Sobrepeso');
            expect(imcService.classificarIMC(30)).toBe('Obeso grau 1');
            expect(imcService.classificarIMC(34.9)).toBe('Obeso grau 1');
            expect(imcService.classificarIMC(35)).toBe('Obeso grau 2');
            expect(imcService.classificarIMC(39.9)).toBe('Obeso grau 2');
            expect(imcService.classificarIMC(40)).toBe('Obeso grau 3');
        });

        test('Testar esses pontos de extremidade assegura o funcionamento limpo de cada "if" sem margens a dúvida na regra', () => {
            // Testes adicionais para garantir cobertura completa
            expect(imcService.classificarIMC(16)).toBe('Abaixo do peso');
            expect(imcService.classificarIMC(20)).toBe('Peso normal');
            expect(imcService.classificarIMC(27)).toBe('Sobrepeso');
            expect(imcService.classificarIMC(32)).toBe('Obeso grau 1');
            expect(imcService.classificarIMC(37)).toBe('Obeso grau 2');
            expect(imcService.classificarIMC(45)).toBe('Obeso grau 3');
        });
    });
});
