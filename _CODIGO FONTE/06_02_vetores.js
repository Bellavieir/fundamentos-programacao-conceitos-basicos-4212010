let contatos = ["João", "Maria", "José", "Ana", "Carlos"];

console.log(contatos[0]);
console.log(contatos[2]);
// console.log(contatos[5]); // ERRO

let idades = [
    25,
    30,
    35,
    40,
    45
];

for (let i = 0; i < idades.length; i++) {
    console.log(`A idade de ${contatos[i]} é ${idades[i]}`);
}
