document.addEventListener("DOMContentLoaded", function() {
    const calculadora = document.getElementById("calculadora");
    calculadora.innerHTML = `
        <h1 id="valor">0</h1>
        <button id="resetar">AC</button>
        <button id="inverter">+/-</button>
        <button id="porcentagem">%</button>
        <button id="divisao">/</button><br>

        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button id="multiplicacao">X</button><br>

        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button id="subtracao">-</button><br>

        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button id="soma">+</button><br>

        <button>0</button>
        <button>,</button>
        <button id="Apresentar">=</button>
    `;

    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;

            if (buttonText.match(/[0-9,]/)) {
                adicionarValor(buttonText);
            } else if (button.id === "soma" || button.id === "subtracao" || button.id === "multiplicacao" || button.id === "divisao") {
                prepararOperacao(button.id);
            } else if (button.id === "porcentagem") {
                prepararOperacao("porcentagem");
            } else if (button.id === "resetar") {
                resetar();
            } else if (button.id === "inverter") {
                inverter();
            } else if (button.id === "Apresentar") {
                calcular();
            }
        });
    });
});

let num1 = 0;
let num2 = 0;
let operacao = "";
let novaOperacao = false;

// Função para adicionar valor ao visor
function adicionarValor(valorDigitado) {
    const visor = document.getElementById("valor");

    // Se for uma nova operação, reinicia o visor
    if (novaOperacao) {
        visor.textContent = valorDigitado;
        novaOperacao = false;
    } else {
        if (visor.textContent === '0') {
            visor.textContent = valorDigitado;
        } else {
            visor.textContent += valorDigitado;
        }
    }
}

// Função para preparar a operação
function prepararOperacao(tipoOperacao) {
    operacao = tipoOperacao;
    num1 = parseFloat(document.getElementById("valor").textContent);
    novaOperacao = true; // Prepara para o próximo número (num2)
}

// Funções de operação
function soma() {
    num1 += num2;
}

function subtracao() {
    num1 -= num2;
}

function divisao() {
    if (num2 !== 0) {
        num1 /= num2;
    } else {
        alert("Não é possível dividir por zero.");
        num1 = 0;  // Reseta para evitar valores inválidos
    }
}

function multiplicacao() {
    num1 *= num2;
}

function porcentagem() {
    num1 = (num1 * num2) / 100;
}

function inverter() {
    num1 = num1 * (-1);
    document.getElementById("valor").textContent = num1;
}

// Função para resetar a calculadora
function resetar() {
    num1 = 0;
    num2 = 0;
    document.getElementById("valor").textContent = '0';
    operacao = '';
    novaOperacao = false;
}

// Função para calcular o resultado
function calcular() {
    num2 = parseFloat(document.getElementById("valor").textContent); // Captura num2 para o cálculo final
    
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
    document.getElementById("valor").textContent = num1;
    operacao = '';  // Reseta a operação após o cálculo
    novaOperacao = true;  // Marca que a próxima operação será uma nova
}
