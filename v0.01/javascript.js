function addCarne(){
    let qndeCarne = Number(document.getElementById('qndeCarne'))
    alert(`Container ${qndeCarne.value} devolvido com sucesso!`)
    window.location.href = 'tela-inicial.html'    
}

function salvarPedido(){
    let qndeCarne = document.getElementById('qndeCarne')
    let bordaCarne = document.getElementById('bordaCarne')
    let adicionalCarne = document.getElementById('adicionalCarne')
    let pedidoCarne = []
    
    let pedidoValor = 0
    if (qndeCarne > 0){
        if (bordaCarne != 'Nenhuma'){
            pedidoValor += 3
            if (adicionalCarne != 'Nenhum'){
                pedidoValor += 2.5 
            }
        }
    }


    // let qndeFrango = document.getElementById('qndeFrango')
    // let bordaFrango = document.getElementById('bordaFrango')
    // let adicionalFrango = document.getElementById('adicionalFrango')

    // let qndeMussarela = document.getElementById('qndeMussarela')
    // let bordaMussarela = document.getElementById('bordaMussarela')
    // let adicionalMussarela = document.getElementById('adicionalMussarela')

    // let qndePizza = document.getElementById('qndePizza')
    // let bordaPizza = document.getElementById('bordaPizza')
    // let adicionalPizza = document.getElementById('adicionalPizza')

    // let qndeCalabresa = document.getElementById('qndeCalabresa')
    // let bordaCalabresa = document.getElementById('bordaCalabresa')
    // let adicionalCalabresa = document.getElementById('adicionalCalabresa')

    // let qndePalmito = document.getElementById('qndePalmito')
    // let bordaPalmito = document.getElementById('bordaPalmito')
    // let adicionalPalmito = document.getElementById('adicionalPalmito')

    // let qndeStrogFrang = document.getElementById('qndeStrogFrang')
    // let bordaStrogFrang = document.getElementById('bordaStrogFrang')
    // let adicionalStrogFrang = document.getElementById('adicionalStrogFrang')

    // let qndeBrocEBacon = document.getElementById('qndeBrocEBacon')
    // let bordaBrocEBacon = document.getElementById('bordaBrocEBacon')
    // let adicionalBrocEBacon = document.getElementById('adicionalBrocEBacon')

    // let qndeMarguerita = document.getElementById('qndeMarguerita')
    // let bordaMarguerita = document.getElementById('bordaMarguerita')
    // let adicionalMarguerita = document.getElementById('adicionalMarguerita')

    // let qndePortuguesa = document.getElementById('qndePortuguesa')
    // let bordaPortuguesa = document.getElementById('bordaPortuguesa')
    // let adicionalPortuguesa = document.getElementById('adicionalPortuguesa')

    // let qndeTresQueijos = document.getElementById('qndeTresQueijos')
    // let bordaTresQueijos = document.getElementById('bordaTresQueijos')
    // let adicionalTresQueijos = document.getElementById('adicionalTresQueijos')

}

