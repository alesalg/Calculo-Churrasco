const botao = document.querySelector("#botaoCalcular")
botao.addEventListener("click", calcularChurrasco)

const calcularChurrasco = () => {
    const mulheres = document.getElementById('mulheres-qnt').value;
    const homens = document.getElementById('homens-qnt').value;
    const criancas = document.getElementById('criancas-qnt').value;
    const acompanhamentos = document.getElementById('acompanhamentos').value;
    const bebidasAlcoolicas = document.getElementById('bebidas-alcoolicas').value;
    const bebidasNaoAlcoolicas = document.getElementById('bebidas-nao-alcoolicas').value;

    let totalCarne = (mulheres * 150) + (homens * 200) + (criancas * 100)
    
    const totalPessoas = Number(mulheres) + Number(homens) + Number(criancas)
    const totalAcompanhamento = acompanhamentos ? 50 * Number(totalPessoas) : 0
    const totalBebidasAlcoolicas = bebidasAlcoolicas ? 500 * Number(bebidasAlcoolicas) : 0
    const totalBebidasNaoAlcoolicas = bebidasNaoAlcoolicas ? 500 * Number(totalPessoas) : 0
    
    document.getElementById("tota-carne").innerHTML = '${getValueMeasure(totalCarne, 1)}'
    document.getElementById("total-pessoas").innerHTML = '${totalPessoas}pessoas'
    document.getElementById("total-acompanhamento").innerHTML = '${getValueMeasure(totalAcompanhamento, 1)}'
    document.getElementById("total-bebidas-alcoolicas").innerHTML = '${getValueMeasure(totalBebidasAlcoolicas, 2)}'
    document.getElementById("total-bebidas-nao-alcoolicas").innerHTML = '${getValueMeasure(totalBebidasNaoAlcoolicas, 2)}'

}
/* 
type 1: comidas
type 2: bebidas
*/

function getValueMeasure(val, type) {
    switch(type) {
        case 1: {
            return val >= 1000 ? '${val/1000}kg' : '${val}g'
            break;
        }
        case 2: {
            return val >= 1000 ? '${val/1000}L' : '${val}ml'
            break;
        }
    }
}