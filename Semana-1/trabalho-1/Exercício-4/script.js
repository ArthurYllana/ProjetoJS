function verificarTipoDado() {
    let entrada = prompt("Digite um valor:");
    let desejaVerificar = confirm("Deseja verificar o tipo do dado informado?");
    let resultado = document.body;
    if (desejaVerificar) {
        resultado.innerHTML = `<h2>O tipo do dado informado é: <strong>${typeof entrada}</strong></h2>`;
    } else {
        resultado.innerHTML = "<h2>Obrigado por visitar esta página.</h2>";
    }
}

// Chamar a função ao carregar a página
verificarTipoDado();
