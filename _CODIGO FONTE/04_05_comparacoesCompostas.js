var chovendo = true;
var noite = true;
var visibilidade = 10;

if (noite == true || chovendo == true || visibilidade < 50) {
    console.log("Ligar os farois");
} else {
    console.log("Desligar os farois");
}

if (chovendo == true && visibilidade <= 25) {
    console.log("Ligar farol de neblina");
} else { 
    console.log("Desligar farol de neblina");
}

if ((noite == true && chovendo == true) || visibilidade == 0) { 
    console.log("Não sair de casa");
}