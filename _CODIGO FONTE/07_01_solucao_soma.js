// DESAFIO: somar os números 1, 2, 3 e 4 e imprimir o resultado
let soma = 0;

// SEU CÓDIGO VAI AQUI

// SOLUÇÃO 1
soma = 1 + 2 + 3 + 4;

// SOLUÇÃO 2
let numeros = [1, 2, 3, 4];
soma = numeros[0] + numeros[1] + numeros[2] + numeros[3];

// SOLUÇÃO 3
soma = 0;
for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    soma += numero;
}

// IMPRIMIR A SOMA
console.log(`A soma dos números é ${soma}`);

// RESPOSTA ESPERADA: 
// A soma dos números é 10