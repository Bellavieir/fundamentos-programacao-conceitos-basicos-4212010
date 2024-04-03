let contatos = ["João", "Maria", "José", "Ana", "Carlos"];

let primeiroContato = contatos[0];
console.log(`primeiroContato: ${primeiroContato}`);

let indiceUltimoContato = contatos.length - 1;
console.log(`indiceUltimoContato: ${indiceUltimoContato}`);

let ultimoContato = contatos[indiceUltimoContato];
console.log(`ultimoContato: ${ultimoContato}`);

let contatoInexistente = contatos[10];
console.log(`contatoInexistente: ${contatoInexistente}`);

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

idades.forEach(function (idade) {
    console.log(idade);
});
