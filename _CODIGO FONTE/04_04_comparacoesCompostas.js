var chovendo = true; 
var noite = true; 
var visibilidade = 10;

if (noite == true || chovendo == true || visibilidade < 50) { 
    console.log("Ligar faróis");    
} else {
    console.log("Desligar faróis");
}

if (chovendo == true && visibilidade <= 25) { 
    console.log("Ligar faóis de neblina");
} else {
    console.log("Desligar faróis de neblina");
}  

if ((noite == true && chovendo == true) || visibilidade == 0) { 
    console.log("Desligar faróis");
}

