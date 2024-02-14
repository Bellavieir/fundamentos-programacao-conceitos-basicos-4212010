// DESAFIO: colocar o número do índice antes do nome, começando com o número 1
let nomes = ["João", "Maria", "José", "Ana", "Carlos"];

// SEU CÓDIGO VAI AQUI
for (let i = 0; i < nomes.length; i++) {
    let numero = i + 1;
    let nome = nomes[i];
    let textoFinal = `${numero} ${nome}`;
    nomes[i] = textoFinal;
}

// IMPRIMIR OS NOMES
console.log(nomes);

// RESPOSTA ESPERADA:
// [ '1 João', '2 Maria', '3 José', '4 Ana', '5 Carlos' ]