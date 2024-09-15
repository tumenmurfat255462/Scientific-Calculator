// script.js
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        // Handle special functions
        let expression = display.value.replace('Math.sqrt(', 'Math.sqrt').replace('Math.sin(', 'Math.sin').replace('Math.cos(', 'Math.cos').replace('Math.tan(', 'Math.tan').replace('Math.pow(', 'Math.pow');
        display.value = eval(expression);
    } catch (error) {
        display.value = 'Noob Looser';
    }
}
