const prompt = require('prompt-sync')({sigint: true});

function calculate() {
    const operation = prompt('Choose an operation (add, subtract, multiply, divide): ');

    if (!['add', 'subtract', 'multiply', 'divide'].includes(operation)) {
        console.log('Invalid operation selected.');
        return;
    }

    const num1 = parseFloat(prompt('Enter the first number: '));
    const num2 = parseFloat(prompt('Enter the second number: '));

    if (isNaN(num1) || isNaN(num2)) {
        console.log('Please enter valid numbers.');
        return;
    }

    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                console.log('Cannot divide by zero.');
                return;
            }
            result = num1 / num2;
            break;
    }

    console.log(`The result is: ${result}`);
}

calculate();