const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

//req: {body: "name": "teste"}


// const fs = require('fs')

function pedido(){
    const pastel = new Object
    pastel.sabor = document.getElementById('sabor').value
    pastel.borda = document.getElementById('borda').value
    pastel.adicional = document.getElementById('adicional').value



    // fs.writeFile(__dirname + '/pedido.json', JSON.stringify(pastel), err =>{
    //     alert( err || ('Pedido Enviado!'))
    //     alert(pastel.sabor)
    // })

    // alert('js funcionando')
}
