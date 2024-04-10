const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let indiceJogador = 0
let novoJogador = ""

const proximoJogador = (req,res) => {
   
    const jogadorDaVez = jogadores[indiceJogador]
    indiceJogador++

    if (indiceJogador >= jogadores.length) {
        indiceJogador = 0; 
    }
    
    res.send(`É a vez de ${jogadorDaVez} jogar!`)
}

const removerJogador = (req, res) => {
    const { indiceJogador } = req.params;
    
    if (indiceJogador < 0 || indiceJogador >= jogadores.length) {
        return res.status(400).send("Índice de jogador inválido.");
    }

    jogadores.splice(indiceJogador, 1);
    res.send(`Jogador removido com sucesso.`);
};

const adicionarJogador = (req,res) => {
    let{ novoJogador } = req.params;
    jogadores.push(novoJogador)
    return res.status(201).send(jogadores);

}

module.exports = {
    proximoJogador,
    removerJogador,
    adicionarJogador
}