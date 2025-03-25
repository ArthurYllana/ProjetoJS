document.addEventListener("DOMContentLoaded", function(){
    const calcularora = document.getElementById("calculadora");
    calcularora.innerHTML = `
        <h1 id="valor">0</h1>
        <button id="resetar"> AC </button>
        <button id=""inverte> +/- </button>
        <button id ="porcentagem"> % </button>
        <button id="divisao"> / </button> <br>

        <button> 7 </button>
        <button> 8 </button>
        <button> 9 </button>
        <button id="multiplicacao"> X </button> <br>

        <button> 4 </button>
        <button> 5 </button>
        <button> 6 </button>
        <button id="subtracao"> - </button> <br>

        <button> 1 </button>
        <button> 2 </button>
        <button> 3 </button>
        <button id="soma"> + </button> <br>

        <button> 0 </button>
        <button> , </button>
        <button id="Apresentar"> = </button>

        `;
        const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            if (button.textContent.match(/[0-9,]/)) {
                adicionarValor(button.textContent);
            } else if (button.id === "soma") {
                operar("soma");
            } else if (button.id === "subtracao") {
                operar("subtracao");
            } else if (button.id === "divisao") {
                operar("divisao");
            } else if (button.id === "multiplicacao") {
                operar("multiplicacao");
            } else if (button.id === "porcentagem") {
                operar("porcentagem");
            } else if (button.id === "resetar") {
                resetar();
            } else if (button.id === "inverter") {
                inverte();
            } else if (button.id === "Apresentar") {
                calcular();
            }
        });
    });
});
        
    /*   
    document.getElementById("soma").addEventListener("click", () => adicionarValor(valor));
    document.getElementById("subtracao").addEventListener("click", () => adicionarValor(valor));
    document.getElementById("divisao").addEventListener("click", () => adicionarValor(valor));
    document.getElementById("multiplicacao").addEventListener("click", () => adicionarValor(valor));
    document.getElementById("porcentagem").addEventListener("click", () => adicionarValor(valor));
    document.getElementById("resetar").addEventListener("click", () => adicionarValor(valor));
    document.getElementById("inverter").addEventListener("click", () => adicionarValor(valor));
    */


let total = 0;
let valor = 0;    
operacao = "";

function operar(operacaoEscolhida) {
    operacao = operacaoEscolhida;
    valor = parseFloat(document.getElementById("valor").textContent);
    document.getElementById("valor").textContent = '0';  // Limpa visor para o próximo valor
}
//Soma
function soma(valor){
    return total += valor;
}

function subtracao(valor){
    return total -= valor;
}

function divisao(valor){
    if (valor !== 0) {
        total /= valor;
    } 
    else {
        alert("Não é possível dividir por zero.");
    }
}

function multiplicacao(valor){
    return total *= valor;
}

function porcentagem(valor){
    return total = (total * valor) /100;
}

function resetar(valor){
    return total = 0;
}

function inverte(valor){
    return total * (-1);
}


function calcular() {
    switch (operacao) {
        case 'soma':
            soma();
            break;
        case 'subtracao':
            subtracao();
            break;
        case 'divisao':
            divisao();
            break;
        case 'multiplicacao':
            multiplicacao();
            break;
        case 'porcentagem':
            porcentagem();
            break;
        default:
            break;
    }
    document.getElementById("valor").textContent = total;
}




