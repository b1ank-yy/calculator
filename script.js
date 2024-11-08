function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(n1, op, n2) {
    if (op === '+') return add(n1, n2);
    if (op === '-') return subtract(n1, n2);
    if (op === '*') return multiply(n1, n2);
    if (op === '/') return divide(n1, n2);
}

function populate() {
    temp = '';
    value = '';
    operator = '';
    value_2 = '';

    const btns = Array.from(document.querySelectorAll('.n-row button'));
    const display = document.querySelector('#box');

    btns.forEach(function(elem) {
        elem.addEventListener('click', (e) => {
            
            if (elem.textContent !== 'C' || elem.textContent !== '+' || elem.textContent !== '-' || elem.textContent !== '*' || elem.textContent !== '/' || elem.textContent !== '=') { 
                temp += elem.textContent;
                display.textContent = temp;
            }

            if (elem.textContent === 'C') {
                display.textContent = '';
                value = '';
                operator = '';
                value_2 = '';
                temp = '';
            }

            // use add function to add val + val2 here after every addition
            //assign the new value to val1 and clear v2
            if (elem.textContent === '+' || elem.textContent === '-' || elem.textContent === '*' || elem.textContent === '/') {
                display.textContent = temp.slice(-1);
                value = temp.substring(0, temp.length - 1);
                operator = temp.slice(-1);
                temp = '';
            }
        
            if (elem.textContent === "=") {
                value_2 = temp.substring(0, temp.length - 1);

                temp = '';

                v = parseFloat(value);
                v2 = parseFloat(value_2)

                result = operate(v, operator, v2);
                display.textContent = result;
            }
        });
    });
    
    return value, operator, value_2;
}

populate();


