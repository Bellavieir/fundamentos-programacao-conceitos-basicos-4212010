var semaforo = "amarelo";

// Versão com dois IFs
if (semaforo == "verde") {
    console.log("Pode passar");
}
if (semaforo == "vermelho") { 
    console.log("PARE!");
}

// Versão com IF e ELSE
if (semaforo == "verde") {
    console.log("Pode passar");
} else {
    console.log("PARE!");
}

// Versão com IF, ELSE IF e ELSE
if (semaforo == "verde") {
    console.log("Pode passar");
} else if (semaforo == "amarelo") {
    console.log("Atenção!");
} else if (semaforo == "vermelho") {
    console.log("PARE!");
} else {
    console.log("Semáforo com problema");
}

// Versão com 3 IFs
if (semaforo == "verde") {
    console.log("Pode passar");
} 
if (semaforo == "amarelo") {
    console.log("Atenção!");
} 
if (semaforo == "vermelho") {
    console.log("PARE!");
}
if (semaforo != "verde" && semaforo != "amarelo" && semaforo != "vermelho") {
    console.log("Semáforo com problema");
}

// Versão com SWITCH
switch (semaforo) {
    case "verde":
        console.log("Pode passar");
        break;
    case "amarelo":
        console.log("Atenção!");
        break;
    case "vermelho":
        console.log("PARE!");
        break;
    default:
        console.log("Semáforo com problema");
        break;
}