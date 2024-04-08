const express = require('express')
const operacoes = require('./src/controladores/operacoes')

const rotas = express();

rotas.get('/somar/:num1/:num2', operacoes.somar )

rotas.get('/subtrair/:num1/:num2', operacoes.subtrair )

rotas.get('/dividir/:num1/:num2', operacoes.dividir )

rotas.get('/multiplicar/:num1/:num2', operacoes.multiplicar )

module.exports= rotas;