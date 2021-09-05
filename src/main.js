const botao = document.querySelector("#botaoCalcular")

const calcularChurrasco = () => {
    const mulheres = document.getElementById('mulheres-qnt').value;
    const homens = document.getElementById('homens-qnt').value;
    const criancas = document.getElementById('criancas-qnt').value;
    const acompanhamentos = document.getElementById('acompanhamentos').checked;
    const vegetarianos = document.getElementById('vegetariano').checked;
    const bebidasAlcoolicas = document.getElementById('bebidas-alcoolicas').value;
    const bebidasNaoAlcoolicas = document.getElementById('bebidas-nao-alcoolicas').value;

    // tc = total consumo, tp = total pessoas, ta = total acompanhamentos
    const tc = Number(mulheres)*150 + Number(homens) * 200 + Number(criancas) * 100
    const tp = Number(mulheres) + Number(homens) + Number(criancas) 
    const ta = vegetarianos?(acompanhamentos ? 100 * Number(tp) : 0) : ( acompanhamentos ? 50 * Number(tp) : 0)

    // Logica de valores por grama e multiplicacao da qtde de pessoas
    let totalCarne = 'Total carne: ${tc}'
    // Soma da quantidade de pessoas
    const totalPessoas = 'Total pessoas: ${tp}'
    // 50g de acompanhamento por pessoa
    const totalAcompanhamento = 'Total acompanhamento: ${ta}'
    // 400ml de bebida nao alcoolica para cada pessoa
    const totalBebidasNaoAlcoolicas = 
    Number(criancas)>5?('Muita criança para bebida alcoolica!'):(bebidasNaoAlcoolicas ? 'Total bebidas não alcoolicas: ${400 * Number(bebidasNaoAlcoolicas)}' : 'Total bebidas não alcoolicas: ${0}')
    // 500 ml de bebida alcoolica para cada pessoa
    const totalBebidasAlcoolicas = bebidasAlcoolicas ? 'Total bebidas alcoolicas: ${500 * NUmber(bebidasAlcoolicas)}' : 'Total bebidas alcoolicas: ${0}'



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

botao.addEventListener("click", calcularChurrasco)
