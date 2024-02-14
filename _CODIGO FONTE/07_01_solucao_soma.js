// DESAFIO: somar todos os números de um array
let numeros = [1, 2, 3, 4];
let soma = 0;

// SEU CÓDIGO VAI AQUI
for (let i = 0; i < numeros.length; i++) {
    let numero = numeros[i];
    soma += numero;
}

// IMPRIMIR A SOMA
console.log(`A soma dos números é ${soma}`);

// RESPOSTA ESPERADA: 
// A soma dos números é 9