function atualizarRelogio(){
    const agora = new Date();

    const hora = agora.getHours();
    const minutos = agora.getMinutes();
    const segundos = agora.getSeconds();

    const horaFormatada = hora.toString().padStart(2, '0');
    const minutosFormatados = minutos.toString().padStart(2, '0');
    const segundosFormatados = segundos.toString().padStart(2, '0');
    
    document.getElementById('relogio').innerHTML = `${horaFormatada}:${minutosFormatados}:${segundosFormatados}`;

    setTimeout(atualizarRelogio, 1000);
}

atualizarRelogio();