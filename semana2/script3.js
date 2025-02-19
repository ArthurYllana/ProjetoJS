function verificarPalindromo() {
    let texto = document.getElementById("texto").value;
    let textoFormatado = texto.toLowerCase().replace(/[^a-z0-9]/g, "");
    let textoInvertido = textoFormatado.split('').reverse().join('');
    
    if (textoFormatado === textoInvertido) {
        alert("É um palíndromo!");
    } else {
        alert("Não é um palíndromo.");
    }
}