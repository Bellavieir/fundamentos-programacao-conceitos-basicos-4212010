var semaforo = "amarelo";

// if (semaforo == "verde") {
//     console.log("Pode passar");
// } else if (semaforo == "vermelho") {
//     console.log("Pare");
// } else if (semaforo == "amarelo") {
//     console.log("Atenção");
// } else {
//     console.log("ERRO: cor do semáforo inválida");
// }

switch (semaforo) {
    case "verde":
        console.log("Pode passar");
        break;
    case "vermelho":
        console.log("Pare");
        break;
    case "amarelo":
        console.log("Atenção");
        break;
    default:
        console.log("ERRO: cor do semáforo inválida");
        break;
}