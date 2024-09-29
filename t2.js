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

console.log(fibonacci(7)); 
console.log(fibonacci(21)); 
console.log(fibonacci(55)); 
// Escolhendo e verificando se os números pertencem à sequência.