function testarVar () {
    var largura = 10;
    if (true) { 
        var largura = 30;
        console.log(largura); 
    }
    console.log(largura); 
}

testarVar();

function testarLet() {
    var largura = 10;
    if (true) { 
        let largura = 30;
        console.log(largura);
    }
    console.log(largura);
}

testarLet();

const umaConstante = 40;
console.log(umaConstante);
// largura = 30; // Erro!
