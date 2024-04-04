    // DESAFIO: criar um programa que imprimo o tipo de cada animal
let animais = ["Arara", "Cachorro", "Gato", "Sardinha", "Elefante", "Tubarão", "Urso", "Aguia", "Cobra"];

// SEU CÓDIGO VAI AQUI
// for (let i = 0; i < animais.length; i++) {

//     let animal = animais[i];
//     let tipo = "";

//     if (animal === "Arara" || animal === "Aguia") {
//         tipo = "ave";
//     } else if (animal === "Cachorro" || animal === "Gato" || animal === "Elefante" || animal === "Urso") { 
//         tipo = "mamífero";
//     } else if (animal === "Sardinha" || animal === "Tubarão") {
//         tipo = "peixe";
//     } else { 
//         tipo = "desconhecido";
//     }

//     console.log(`${animal} : ${tipo}`);
// }

// RESPOSTA ESPERADA:
// Arara : ave
// Cachorro : mamífero
// Gato : mamífero
// Sardinha : peixe
// Elefante : mamífero
// Tubarão : peixe
// Urso : mamífero
// Aguia : ave
// Cobra : desconhecido

// SWITCH 
for (let i = 0; i < animais.length; i++) {

    let animal = animais[i];
    let tipo = "";

    switch (animal) {
        case "Arara", "Aguia":
            tipo = "ave";
            break;
        case "Cachorro", "Gato", "Elefante", "Urso":
            tipo = "mamífero";
            break;
        case "Sardinha", "Tubarão":
            tipo = "peixe";
            break;
        default:
            tipo = "desconhecido";
            break;
    }

    console.log(`${animal} : ${tipo}`);
}