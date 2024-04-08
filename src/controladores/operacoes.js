

const somar = (req,res) => {
   const { num1, num2 } = req.params
   
   const soma = parseFloat(num1) + parseFloat(num2)

   res.send (`O valor da soma é ${soma}`)

   
}

const subtrair = (req,res) => {
    const { num1, num2 } = req.params
   
    const subtracao = parseFloat(num1) - parseFloat(num2)

   res.send (`O valor da subtracao é ${subtracao}`)

}   

const multiplicar = (req,res) => {
    const { num1, num2 } = req.params
   
    const multiplicar = parseFloat(num1) * parseFloat(num2)

   res.send(`O valor da multiplicação é ${multiplicar}`)
}

const dividir = (req,res) => {
    const { num1, num2 } = req.params
   
    const divisao = parseFloat(num1) / parseFloat(num2)

   res.send (`O valor da divisão é ${divisao}`)
}


module.exports = {
    somar,
    subtrair,
    multiplicar,
    dividir
}





