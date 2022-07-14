//Criar sistema de pedido para receber varios itens, sem qnde de itens pre estabelecido, e depois que 
//finalizar o pedido, calcular o valor total.
const fs = require('fs')//ja vem previamente instalado no node

const caminho = __dirname + '/pedido.json'
fs.readFile(caminho, 'utf-8', (err, pedido) => {// só irá ler o cod embaixo se o error = 0
    const arrayPasteis = pedido  = JSON.parse(pedido)
    console.log(arrayPasteis)
})

// arrayPasteis = [
//     {tipo: 'simples', sabor: 'CARNE', qnde: true, borda: 'cheddar', adicional: 'nenhum'},
//     {tipo: 'simples', sabor: 'CARNE', qnde: true, borda: 'requeijão', adicional: 'mussarela'},
//     {tipo: 'simples', sabor: 'MUSSARELA', qnde: true, borda: 'nenhuma', adicional: 'nenhum'},
//     {tipo: 'especial', sabor: 'STROGONOFF DE FRANDO', qnde: true, borda: 'nenhuma', adicional: 'milho'}
// ]


    function somarPedido(){
        const valBorda = 3
        const valAdicional = 2.5

        let valorItem = 0
        let totalUnidade = 0
        let totalPedido = 0

        for (i in arrayPasteis){
            if (arrayPasteis[i].tipo === 'simples'){
                valorItem = 8 
            } else {
                valorItem = 12
            }
            if (arrayPasteis[i].qnde === true){
                totalUnidade = valorItem
                if (arrayPasteis[i].borda !== 'nenhuma'){
                    totalUnidade += valBorda
                }
                if (arrayPasteis[i].adicional !== 'nenhum'){
                    totalUnidade += valAdicional
                }
                console.log(`Pastel de ${arrayPasteis[i].sabor} com borda de ${arrayPasteis[i].borda} e adicional de ${arrayPasteis[i].adicional} R$${totalUnidade.toFixed(2)}`) 
                totalPedido += totalUnidade
            }      
        }
        console.log(`
    O TOTAL DO PEDIDO É R$${totalPedido.toFixed(2)}`)
    }
    somarPedido()
