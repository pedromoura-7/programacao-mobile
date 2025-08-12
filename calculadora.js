// calculadora.js

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pergunta o primeiro número
rl.question("Digite o primeiro número: ", (input1) => {
    let numero1 = parseFloat(input1);

    // Pergunta o segundo número
    rl.question("Digite o segundo número: ", (input2) => {
        let numero2 = parseFloat(input2);

        // Pergunta a operação desejada
        rl.question("Digite a operação (+, -, *, /): ", (operador) => {
            let resultado;

            if (operador === "+") {
                resultado = numero1 + numero2;
            } else if (operador === "-") {
                resultado = numero1 - numero2;
            } else if (operador === "*") {
                resultado = numero1 * numero2;
            } else if (operador === "/") {
                if (numero2 !== 0) {
                    resultado = numero1 / numero2;
                } else {
                    resultado = "Erro: divisão por zero!";
                }
            } else {
                resultado = "Operador inválido!";
            }

            console.log(`O resultado de ${numero1} ${operador} ${numero2} é: ${resultado}`);
            rl.close();
        });
    });
});
