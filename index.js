const express = require('express');
const server = express();
const classicoOuro = require('./src/data/classico/ouro/cavOuro.json');

server.get('/filmes', (req, res) => {
    return res.json(classicoOuro);
});

server.get('/classico/ouro', (req, res) => {
    return res.json(classicoOuro);
});

server.listen(3000, () => {
    console.log('Servidor está funcionando!');
});