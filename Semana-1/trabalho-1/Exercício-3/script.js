
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        let resultado = 1;
        for (let i = 2; i <= numero; i++) {
            resultado *= i;
        }
        return resultado;
    }
}

function calcularFatorialUsuario() {
    let numero = prompt("Digite um número inteiro positivo para calcular o fatorial:");

    // Validar se o número é um inteiro positivo
    numero = parseInt(numero);

    if (Number.isInteger(numero) && numero >= 0) {
        let fatorial = calcularFatorial(numero);
        alert(`O fatorial de ${numero} é ${fatorial}`);
    } else {
        alert("Por favor, digite um número inteiro positivo válido.");
    }
}

calcularFatorialUsuario();
