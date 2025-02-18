function FormatarData(){
    const diasDasSemanas = [
        'Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'
    ];

    const meses = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    const dataAtual = new Date();
    const diaSemana = diasDasSemanas[dataAtual.getDay()];
    const diaDoMes = dataAtual.getDate();
    const mes = meses[dataAtual.getMonth()];
    const ano = dataAtual.getFullYear();

    const dataFormatada = `${diaSemana}, ${diaDoMes} de ${mes} de ${ano}`;

    document.getElementById('dataAtual').innerHTML = dataFormatada;
}
FormatarData();