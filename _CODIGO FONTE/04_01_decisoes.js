var semaforo = "verde";

if (semaforo == "verde") {
    console.log("Pode passar");
}

console.log("1) " + semaforo);

if (semaforo = "vermelho") { // ERRO FORÇADO DE PROPÓSITO. USAR == AO INVÉS DE =.
    console.log("PARE!");
}

console.log("2) " + semaforo);