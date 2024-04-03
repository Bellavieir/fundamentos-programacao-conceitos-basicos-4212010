function ligarCarro() { 
    console.log("Carro ligado");
}

function aceleraCarro(quantidade) {
    console.log(`Acelerando o carro em ${quantidade} km/h`);
}

ligarCarro();
aceleraCarro(50);
aceleraCarro(100);

function ajustarBanco(banco, posicao) {
    console.log(`Ajustando o banco ${banco} na posição ${posicao}`);
}

ajustarBanco("motorista", "para frente");
ajustarBanco("passageiro", "para trás");