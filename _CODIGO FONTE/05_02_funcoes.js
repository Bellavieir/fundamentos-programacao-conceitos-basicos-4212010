function ligarCarro() {
    console.log("O carro está ligado e pronto para partir!");
}

ligarCarro(); 

function acelerar(quantidade) {
    console.log(`Acelerando com ${quantidade} de potência.`);
}

acelerar(5);
acelerar(-1);

function cargaRestanteBateria() { 
    var tamanhoBateria = 60;
    var nivelUtilizado = 50;
    var restante = tamanhoBateria - nivelUtilizado;
    console.log(restante);
    return restante;
}

// cargaRestanteBateria();

var carga = cargaRestanteBateria();
var mensagem = `Você ainda tem ${carga} de carga na bateria.`;
console.log(mensagem);

function tempoParaCarregarBateriaAte(porcentagem) {
    // pegar carga restante
    var carga = cargaRestanteBateria();
    // ver quanto que tem que carregar
    var cargaNecessaria = porcentagem - carga;
    // calcular tempo para carregar
    var tempo = cargaNecessaria * 2;
    return tempo;
}

var porcentagemDesejada = 95;
var tempoRestante = tempoParaCarregarBateriaAte(porcentagemDesejada);
console.log(`Faltam ${tempoRestante} minutos para carregar.`);