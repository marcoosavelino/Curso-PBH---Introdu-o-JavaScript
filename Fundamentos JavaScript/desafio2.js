let readlineSync = require("readline-sync");

// Calculadora Implementada

function soma(a = required(), b = required()){return a + b};
function subtracao(a = required(), b = required()){return a - b};
function multiplicacao(a = required(), b = required()){return a * b};
function divisao(a = required(), b = required()){return a / b};

let exibir = true;
    
function exibirMenu(){
    readlineSync.question("Pressione uma tecla pra continuar...");
    console.clear();
    console.log("------------------")
    console.log("   Calculadora   ");
    console.log("    1: Soma      ");
    console.log("  2: Subtração   ");
    console.log(" 3: Multiplicação ");
    console.log("   4: Divisão    ");
    console.log("------------------");
    console.log("   5: Encerrar    ");
    console.log("------------------");
}


    
    while(exibir){
        let opcao = readlineSync.question("Digite uma opção: ");

    switch(parseInt(opcao))
    {
        case 1:
            let numSoma1 = readlineSync.question("Digite o primeiro número: ");
            let numSoma2 = readlineSync.question("Digite o segundo número: ");
            console.log("Resultado: " , soma(parseInt(numSoma1),parseInt(numSoma2)));
            
            exibirMenu();
            break;

        case 2:
            let numSub1 = readlineSync.question("Digite o primeiro número: ");
            let numSub2 = readlineSync.question("Digite o segundo número: ");
            console.log("Resultado: " , subtracao(parseInt(numSub1),parseInt(numSub2)));
            
            exibirMenu();
            break;

        case 3:
            let numMult1 = readlineSync.question("Digite o primeiro número: ");
            let numMult2 = readlineSync.question("Digite o segundo número: ");
            console.log("Resultado: " , multiplicacao(parseInt(numMult1),parseInt(numMult2)));
            
            exibirMenu();
            break;

        case 4:
            let numDiv1 = readlineSync.question("Digite o primeiro número: ");
            let numDiv2 = readlineSync.question("Digite o segundo número: ");
            console.log("Resultado: " , divisao(parseInt(numDiv1),parseInt(numDiv2)));
            exibirMenu();
            break;

        case 5:
            console.log("Programa Encerrado!");
            exibir = false;
            break;
            
        default:
            console.log("Opção Inválida!");
            exibirMenu();

    }

}