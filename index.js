const app = require('./imc/app');

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`POST http://localhost:${PORT}/imc`);
});
