var mensagem = "Olá, mundo!"
console.log(mensagem);
console.log("mensagem");

var saudacao = "Olá";

var nome = "Lucas Longo";
mensagem = saudacao + ", " + nome;
console.log(mensagem);

var conteudo = 'O livro se chama "O Livro"';
console.log(conteudo);

conteudo = "O livro se chama 'O Livro'";
console.log(conteudo);

conteudo = "O livro se chama \"O Livro\"";
console.log(conteudo);

mensagem = "Mensagen: " + saudacao + ", " + nome + "! " + conteudo;
console.log(mensagem);

mensagem = `Mensagem: ${saudacao}, ${nome}! ${conteudo}`;
console.log(mensagem);
