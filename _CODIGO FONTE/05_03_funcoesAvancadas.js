function cargaRestanteBateria() { 
    var tamanhoBateria = 100;
    var cargaAtual = 50;
    var cargaRestante = tamanhoBateria - cargaAtual;
    return cargaRestante;
}

var cargaRestante = cargaRestanteBateria();
console.log(`A carga restante da bateria é de ${cargaRestante}%`);

function tempoParaCarregarBateria(porcentagem) {
    var carga = cargaRestanteBateria();
    var cargaNecessaria = porcentagem - carga;
    var tempo = cargaNecessaria * 2;
    return tempo;
}

var porcentagem = 80;
var tempoParaCarregar = tempoParaCarregarBateria(porcentagem);
console.log(`O tempo necessário para carregar a bateria até ${porcentagem}% é de ${tempoParaCarregar} minutos`);