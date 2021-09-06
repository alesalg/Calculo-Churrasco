const botao = document.querySelector("#botaoCalcular")

const calcularChurrasco = () => {

    //Coleta valor dos inputs
    const mulheres = document.getElementById('mulheres-qnt').value;
    const homens = document.getElementById('homens-qnt').value;
    const criancas = document.getElementById('criancas-qnt').value;

    const acompanhamentos = document.getElementById('acompanhamentos').checked;
    const vegetariano = document.getElementById('vegetariano').checked;
    const bebidasAlcoolicas = document.getElementById('bebidas-alcoolicas').value;
    const bebidasNaoAlcoolicas = document.getElementById('bebidas-nao-alcoolicas').value;

    const tc = Number(mulheres) *150 +Number(homens) * 200+Number(criancas) *100
    const tp = Number(mulheres) + Number(homens) + Number(criancas)
    const ta = vegetariano?(acompanhamentos ? 100 * Number(tp) : 0) : (acompanhamentos ? 50 * Number(tp) :0)

    //Logica de valores por grama e multiplicacao da quantidade de pessoas
    let totalCarne = `Total carne: ${tc}`

    //Soma da quantidade de pessoas
    const totalPessoas = `Total pessoas: ${tp}`

    //50g de acompanhamento por pessoa
    const totalAcompanhamento = `Total acompanhamento: ${ta}`

    //400 ml de bebida nao alcoolica para cada pessoa
    const totalBebidasNaoAlcoolicas = Number(criancas)>5?('Muita criança para bebida alcoolica!'):(bebidasNaoAlcoolicas ? `Total bebidas não alcoolicas: ${500 * Number(bebidasNaoAlcoolicas)}` : `Total bebidas não alcoolicas: ${0}`)

    //500 ml de bebida alcoolica para cada pessoa
    const totalBebidasAlcoolicas = bebidasAlcoolicas ? `Total bebidas alcoolicas: ${500 * Number(bebidasAlcoolicas)}` : `Total bebidas alcoolicas: ${0}`

    document.getElementById("total-carne").innerHTML = `${getValueMeasure(totalCarne, 1)}`
    document.getElementById("total-pessoas").innerHTML = `${totalPessoas} pessoas`
    document.getElementById("total-acompanhamento").innerHTML = `${getValueMeasure(totalAcompanhamento, 1)}`
    document.getElementById("total-bebidas-nao-alcoolicas").innerHTML = `${getValueMeasure(totalBebidasNaoAlcoolicas, 2)}`
    document.getElementById("total-bebidas-alcoolicas").innerHTML = `${getValueMeasure(totalBebidasAlcoolicas, 2)}`
}

/* Definição da medida utilizada a partir da quantidade medida em gramas
type1: comidas
type2: bebidas
*/

function getValueMeasure(val, type) {
    switch(type) {
        case 1: {
            return (val >= 1000 ? `${val/1000}kg` : `${val}g`)
            break;
        }
        case 2: {
            return val == 'Muita criança para bebida alcoolica!'? 'Muita criança para bebida alcoolica!' : val >= 1000 ? `${val/1000}L` : `${val}ml`
            break
        }
    }
}

botao.addEventListener("click", calcularChurrasco)