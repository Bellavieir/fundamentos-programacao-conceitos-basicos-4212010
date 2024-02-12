ligarCarro(); 

function ligarCarro() {
    console.log("O carro está ligado e pronto para partir!");
}

acelerar(5);
acelerar(-1);

function acelerar(quantidade) {
    console.log(`Acelerando com ${quantidade} de potência.`);
}

ajustarBanco("motorista", "reclinado");
ajustarBanco("passageiro", "vertical");
ajustarBanco("traseiro", "fechado");

function ajustarBanco(banco, posicao) {
    console.log(`Ajustando o banco ${banco} para a posição ${posicao}.`);
}

