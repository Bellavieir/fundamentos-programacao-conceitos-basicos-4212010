let contatos = ["João", "Maria", "José", "Ana", "Carlos"];

let primeiroContato = contatos[0];
console.log(`primeiroContato: ${primeiroContato}`);

let indiceDoUltimoItem = contatos.length - 1;
console.log(`indiceDoUltimoItem: ${indiceDoUltimoItem}`);

let ultimoContato = contatos[indiceDoUltimoItem];
console.log(`ultimoContato: ${ultimoContato}`);

// console.log(contatos[5]); // ERRO

let idades = [
    25,
    30,
    35,
    40,
    45
];

for (let i = 0; i < idades.length; i++) {
    console.log(idades[i]);
}

// for each 
idades.forEach(function (idade) {
    console.log(idade);
});
// ou
idades.forEach(idade => console.log(idade));
// ou com indicie
idades.forEach((idade, indice) => console.log(indice, idade));
// ou com multiplas linhas
idades.forEach((idade, indice) => {
    console.log(indice, idade);
});