function testarVar () {
    var largura = 10;
    if (true) { 
        var largura = 30;
        console.log(`largura dentro do if: ${largura}`); 
    }
    console.log(`largura fora do if: ${largura}`); 
}

testarVar();

function testarLet() {
    var largura = 10;
    if (true) { 
        let largura = 30;
        console.log(`largura dentro do if do testearLet: ${largura}`);
    }
    console.log(`largura fora do if do testearLet: ${largura}`);
}

testarLet();

const umaConstante = 40;
console.log(`umaConstante: ${umaConstante}`);
// largura = 30; // Erro!


