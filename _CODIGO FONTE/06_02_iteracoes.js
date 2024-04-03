function lerArquivo(nomeArquivo) { 
    console.log(`Lendo arquivo ${nomeArquivo}`);
}

const numeroArquivos = 10;
let contador = 0;

while (contador < numeroArquivos) {
    let nomeArquivo = `arquivo${contador}.txt`;
    lerArquivo(nomeArquivo);
    // contador = contador + 1;
    contador++;
}

for (let i = 0; i < numeroArquivos; i++) {
    let nomeArquivo = `arquivoFor${i}.txt`;
    lerArquivo(nomeArquivo);
}


