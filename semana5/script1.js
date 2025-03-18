let valorHomens = 0;
let valorMulheres = 0;

document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    app.innerHTML = `
        <h1>Controle de Valores</h1>
        <h2>Total: <span id="total">0</span></h2>
        <p>Homens: <span id="valorHomens">0</span></p>
        <p>Mulheres: <span id="valorMulheres">0</span></p>
        <button id="btnHomens">Adicionar para Homens</button>
        <button id="btnMulheres">Adicionar para Mulheres</button>
        <button id="btnDiminuirHomens">Diminuir Homens</button>
        <button id="btnDiminuirMulheres">Diminuir Mulheres</button>
        <button id="btnReset">Resetar</button>
    `;

    document.getElementById("btnHomens").addEventListener("click", () => adicionarValor('homens'));
    document.getElementById("btnMulheres").addEventListener("click", () => adicionarValor('mulheres'));
    document.getElementById("btnDiminuirHomens").addEventListener("click", () => diminuirValor('homens'));
    document.getElementById("btnDiminuirMulheres").addEventListener("click", () => diminuirValor('mulheres'));
    document.getElementById("btnReset").addEventListener("click", resetarValores);
});

function adicionarValor(tipo) {
    if (tipo === 'homens') {
        valorHomens += 1;
        document.getElementById('valorHomens').textContent = valorHomens;
    } else if (tipo === 'mulheres') {
        valorMulheres += 1;
        document.getElementById('valorMulheres').textContent = valorMulheres;
    }
    atualizarTotal();
}

function diminuirValor(tipo) {
    if (tipo === 'homens' && valorHomens > 0) {
        valorHomens -= 1;
        document.getElementById('valorHomens').textContent = valorHomens;
    } else if (tipo === 'mulheres' && valorMulheres > 0) {
        valorMulheres -= 1;
        document.getElementById('valorMulheres').textContent = valorMulheres;
    }
    atualizarTotal();
}

function atualizarTotal() {
    let total = valorHomens + valorMulheres;
    document.getElementById('total').textContent = total;
}

function resetarValores() {
    valorHomens = 0;
    valorMulheres = 0;
    document.getElementById('valorHomens').textContent = valorHomens;
    document.getElementById('valorMulheres').textContent = valorMulheres;
    atualizarTotal();
}
