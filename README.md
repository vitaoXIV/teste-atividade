# Calculadora de IMC

Projeto em JavaScript com Node.js para calcular e classificar o Índice de Massa Corporal (IMC).

## Estrutura do Projeto

- **imcService.js**: Lógica de cálculo e classificação do IMC
- **imcController.js**: Controlador que conecta requisição HTTP com a lógica
- **app.js**: Aplicação Express com definição de rotas
- **imcService.test.js**: Testes unitários
- **imc.test.js**: Testes de integração

## Instalação

```bash
npm install
```

## Execução

Para iniciar o servidor:

```bash
npm start
```

O servidor rodará na porta 3000.

## Uso da API

### POST /imc

Calcula o IMC e retorna a classificação.

**Body:**
```json
{
  "peso": 70,
  "altura": 1.75
}
```

**Response:**
```json
{
  "imc": "22.86",
  "classificacao": "Peso normal"
}
```

## Testes

Para rodar os testes:

```bash
npm test
```

### Cobertura de Testes

- **Testes Unitários**: Validam o cálculo do IMC e as classificações com todos os limites
- **Testes de Integração**: Validam a API HTTP

## Classificações do IMC

- **Abaixo do peso**: IMC < 18.5
- **Peso normal**: 18.5 ≤ IMC < 25
- **Sobrepeso**: 25 ≤ IMC < 30
- **Obeso grau 1**: 30 ≤ IMC < 35
- **Obeso grau 2**: 35 ≤ IMC < 40
- **Obeso grau 3**: IMC ≥ 40
