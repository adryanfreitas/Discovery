/*  ### Sistema de gastos familiar


Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * Receitas: []
    * despesas: []

Agora, crie uma função que irá calcular o total de reiceitas e despesas e irá mostrar uma mensaguem se a família está com saldo positivo ou negativo, seguido do valor do saldo 

*/

let Família = {
    Receitas: [3255, 2700.58, 120, 10.25],
    Despesas: [268, 300.27, 110]
}


function sum(array) {
    let total = 0;

    for(let value of array) {
        total += value
    }

    return total


}

function calculo() {
    const calculoReceitas = sum(Família.Receitas)
    const calculoDespeças = sum(Família.Despesas)

    const total = calculoReceitas - calculoDespeças

    const ComDinheiro = total >= 0

    let CaixaPostal = "Negativo"

    if (ComDinheiro) {
        CaixaPostal = "Positivo"
    }

    console.log(`Seu saldo é ${CaixaPostal}: R$${total.toFixed(2)}`)
}

calculo()