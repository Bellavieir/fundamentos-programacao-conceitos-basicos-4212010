// Versão a == b
var a = 1;
var b = "1"; 

if (a == b) {
    console.log("1) a == b");
}

// Versão identidade estrita
a = 1;
b = "1";

if (a === b) {
    console.log("2) a === b");
}

a = 1;
b = 1;

if (a === b) {
    console.log("3) a === b");
}

a = "1";
b = "1";

if (a === b) {
    console.log("4) a === b");
}

// Versão negação 
a = 1;
b = 2;

if (a !== b) {
    console.log("5) a !== b");
}

if (a != b) {
    console.log("6) a != b");
}

// Versão de maior e menor
a = 1;
b = 2;

if (a < b) {
    console.log("7) a é menor que b");
}

a = 2;
b = 1;

if (a > b) {
    console.log("8) a é maior que b");
}

// Versão de maior ou igual e menor ou igual
a = 1;
b = 1;

if (a <= b) {
    console.log("9) a é menor ou igual a b");
}

a = 2;
b = 1;

if (a >= b) {
    console.log("10) a é maior ou igual a b");
}