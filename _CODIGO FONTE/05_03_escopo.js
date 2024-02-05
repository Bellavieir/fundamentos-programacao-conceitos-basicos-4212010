var variavelGlobal = "global";

console.log(variavelGlobal);

testarGlobal();
console.log(variavelGlobal);

testarLet();

testarVar();

function testarGlobal() {
    variavelGlobal = "global, dentro da função";
    
}

function testarLet() {
    let letTeste = "Let da função";
    if (variavelGlobal == "global") {
        let letTeste = "Let da função, dentro do bloco";
        console.log(letTeste);
    }
    console.log(letTeste); 
}

function testarVar() {
    var varTeste = "Variável da função";
    if (variavelGlobal == "global") {
        var varTeste = "Variável da função, dentro do bloco";
        console.log(varTeste); 
    }
    console.log(varTeste); 
}

