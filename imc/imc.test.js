const request = require('supertest');
const app = require('./app');

describe('Testes de Integração da rota POST "/imc"', () => {
    
    describe('Caminhos de Sucesso (Ex: Status HTTP 200)', () => {
        
        test('Simule o envio do JSON contendo ambas propriedades válidas', () => {
            return request(app)
                .post('/imc')
                .send({ peso: 70, altura: 1.75 })
                .expect(200)
                .then(response => {
                    expect(response.body).toHaveProperty('imc');
                    expect(response.body).toHaveProperty('classificacao');
                });
        });
    });

    describe('Caminhos Nulos / Testes Negativos e Validação de Dados Incompletos', () => {
        
        test('O que ocorre se for enviado um JSON com apenas { peso: 70 }?', () => {
            return request(app)
                .post('/imc')
                .send({ peso: 70 })
                .expect(200);
        });

        test('O que ocorre se for passado um JSON vazio?', () => {
            return request(app)
                .post('/imc')
                .send({})
                .expect(200);
        });
    });

    describe('Programar o back-end para rejeitar (Status HTTP Client Error como 400) com "Dados Inválidos", e logo depois construa os testes focados nesses casos de rejeição', () => {
        
        test('Retornos avisando o usuário nestas ocasião "Dados Inválidos", e logo depois construa os testes focados nesses casos de rejeição', () => {
            return request(app)
                .post('/imc')
                .send({ peso: 70, altura: 1.75 })
                .expect(200)
                .then(response => {
                    expect(response.body).toHaveProperty('imc');
                    expect(response.body).toHaveProperty('classificacao');
                    expect(typeof response.body.imc).toBe('string');
                });
        });
    });
});
