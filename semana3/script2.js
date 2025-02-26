function criarCarro(marca, modelo, ano, cor, km, valor_fipe){
    return {
        marca: marca,
        modelo: modelo,
        ano: ano,
        cor: cor,
        km: km,
        valor_fipe: valor_fipe,

        // Método para calcular os anos de utilização
        anosUtilizacao: function(){
            const anoAtual = new Date().getFullYear();
            return anoAtual - this.ano;
        },

        // Método para calcular o valor de mercado
        valorMercado: function(){
            const kmPorAno = this.km / this.anosUtilizacao();
            let percentual = 1;
            
            if(kmPorAno <= 30000){
                percentual = 1.1; // 110% do valor FIPE
            }
            else if(kmPorAno <= 50000){
                percentual = 1;  // 100% do valor FIPE
            }
            else{
                percentual = 0.9; // 90% do valor FIPE
            }
            return this.valor_fipe * percentual;
        }
    };
}

// Evento de envio do formulário
document.getElementById('carForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário e recarrega a página

    // Coleta os valores inseridos no formulário
    const marca = document.getElementById('marca').value;
    const modelo = document.getElementById('modelo').value;
    const ano = parseInt(document.getElementById('ano').value);
    const cor = document.getElementById('cor').value;
    const km = parseInt(document.getElementById('km').value);
    const valor_fipe = parseFloat(document.getElementById('valor_fipe').value);

    // Cria o objeto Carro com os dados do formulário
    const carro = criarCarro(marca, modelo, ano, cor, km, valor_fipe);

    // Exibe as informações calculadas
    const infoCarro = document.getElementById('infoCarro');
    infoCarro.innerHTML = `
        <p><strong>Marca:</strong> ${carro.marca}</p>
        <p><strong>Modelo:</strong> ${carro.modelo}</p>
        <p><strong>Ano:</strong> ${carro.ano}</p>
        <p><strong>Cor:</strong> ${carro.cor}</p>
        <p><strong>Kilometragem:</strong> ${carro.km} km</p>
        <p><strong>Valor FIPE:</strong> R$ ${carro.valor_fipe.toFixed(2)}</p>
        <p><strong>Anos de Utilização:</strong> ${carro.anosUtilizacao()}</p>
        <p><strong>Valor de Mercado:</strong> R$ ${carro.valorMercado().toFixed(2)}</p>
    `;

    // Limpa os campos do formulário após o envio
    document.getElementById('carForm').reset();
});