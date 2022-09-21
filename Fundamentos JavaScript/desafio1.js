/* Construa um programa em JavaScript que receba o nome digitado pelo usuário
 e imprima este nome na tela.
*/
let readlineSync = require("readline-sync");

let a = readlineSync.question("Digite seu nome: ");
console.log(a);

