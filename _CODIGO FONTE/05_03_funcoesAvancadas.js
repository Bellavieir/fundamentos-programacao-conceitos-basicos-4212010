// cargaRestanteBateria();

var carga = cargaRestanteBateria();
var mensagem = `Você ainda tem ${carga} de carga na bateria.`;
console.log(mensagem);

function cargaRestanteBateria() { 
    var tamanhoBateria = 60;
    var nivelUtilizado = 50;
    var restante = tamanhoBateria - nivelUtilizado;
    console.log(restante);
    return restante;
}


var porcentagemDesejada = 95;
var tempoRestante = tempoParaCarregarBateriaAte(porcentagemDesejada);
console.log(`Faltam ${tempoRestante} minutos para carregar.`);

function tempoParaCarregarBateriaAte(porcentagem) {
    var carga = cargaRestanteBateria();
    var cargaNecessaria = porcentagem - carga;
    var tempo = cargaNecessaria * 2;
    return tempo;
}
