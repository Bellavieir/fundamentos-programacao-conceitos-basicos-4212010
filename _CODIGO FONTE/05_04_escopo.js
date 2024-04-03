function testarVar() {
    var largura = 10;
    if (largura > 5) {
        var largura = 5;
        console.log(`Largura no if: ${largura}`);
    }
    console.log(`Largura após if: ${largura}`);
}

function testarLet() {
    var largura = 10;
    if (largura > 5) {
        let largura = 5;
        console.log(`Largura no if: ${largura}`);
    }
    console.log(`Largura após if: ${largura}`);
}

testarVar();
testarLet();

const umaConstante = 40;
console.log(`Constante: ${umaConstante}`);
// umaConstante = 50;