// 4 - Números 
var quantidadeFarinha = 2;
var quantidadeOvos = 3;
var quantidadeLeite = 1;

var custoFarinha = 2.50 * quantidadeFarinha;
var custoOvos = 1.50 * quantidadeOvos;
var custoLeite = 3.00 * quantidadeLeite;

var custoTotal = custoFarinha + custoOvos + custoLeite;

console.log("O custo total é de R$" + custoTotal.toFixed(2));
