const express = require('express')
const operacoes = require('./src/controladores/operacoes')
const rodada = require('./src/controladores/rodada')

const rotas = express();

rotas.get('/', rodada.proximoJogador )
rotas.delete('/remover/:indiceJogador', rodada.removerJogador )
rotas.post('/adicionar/:novoJogador', rodada.adicionarJogador)

module.exports= rotas;