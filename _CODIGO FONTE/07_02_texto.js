let nomes = ["João", "Maria", "José", "Ana", "Carlos"];
for (let i = 0; i < nomes.length; i++) {
    let nomeComNumero = `${i} ${nomes[i]}`;
    nomes[i] = nomeComNumero;
}
console.log(nomes);