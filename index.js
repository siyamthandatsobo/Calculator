const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.btn');
let firstOperand = null;
let operator = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (!isNaN(parseInt(value))) {
            display.textContent = display.textContent === '0' ? value : display.textContent + value;
        } else if (value === 'C') {
            display.textContent = '0';
            firstOperand = null;
            operator = null;
        } else if (value === '=') {
            if (firstOperand !== null && operator !== null) {
                const result = eval(`${firstOperand} ${operator} ${display.textContent}`);
                display.textContent = result;
                firstOperand = result;
                operator = null;
            }
        } else {
            if (firstOperand === null) {
                firstOperand = parseFloat(display.textContent);
                operator = value;
                display.textContent = '0';
            } else if (operator !== null) {
                const result = eval(`${firstOperand} ${operator} ${display.textContent}`);
                display.textContent = result;
                firstOperand = result;
                operator = value;
            }
        }
    });
});
