const fs = require('fs')

function finalizarPedido(){
    const pastel = new Object
    pastel.sabor = ('carne')
    pastel.borda = ('cheddar')
    pastel.adicional = ('mussarela')

    fs.writeFile(__dirname + '/pedido.json', JSON.stringify(pastel), err =>{
        console.log( err || ('Pedido Enviado!'))
    })
}
finalizarPedido()

  
