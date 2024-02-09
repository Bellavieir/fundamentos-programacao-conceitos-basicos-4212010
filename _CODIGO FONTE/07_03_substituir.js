let animais = ["Cachorro", "Gato", "Papagaio", "Arara", "Peixe"];
for (let i = 0; i < animais.length; i++) {
    let animal = animais[i];
    if (animal === "Gato") {
        animais[i] = "Cachorro";
    }
}