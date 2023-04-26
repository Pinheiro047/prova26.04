let calcular = document.getElementById('calcular')
let resultado = document.getElementById('resultado')
let preco_final = document.getElementById('preco_final')

let qntd_prod = []
let preco_prod = []

calcular.addEventListener('click' , ()=>{
    let produto = document.getElementById('produto').value
    let preco_prod = Number(document.getElementById('preco_prod').value)
    let qntd_prod = Number(document.getElementById('qntd_prod').value)

    let preco_final = preco_prod*qntd_prod

    


    resultado.innerHTML = 'O valor da sua compra foi de R$:' + preco_final
})