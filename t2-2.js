function fibonacci(number) {
    let x = 0, y = 1, z;
    if (number === 0 || number === 1) 
        return `O número ${number} pertence à sequência de Fibonacci.`;

    while (y < number) {
        z = x + y;
        x = y;
        y = z;
    }

    if (y === number) {
        return `O número ${number} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${number} não pertence à sequência de Fibonacci.`;
    }
}

const number = parseInt(prompt("Digite um número para verificar na sequência de Fibonacci:"));
alert(fibonacci(number));

// Fiz duas versões da T2, sendo que essa pode ser verificada com input através do F12 no navegador.