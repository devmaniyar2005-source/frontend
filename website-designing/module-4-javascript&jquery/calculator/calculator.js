// Connect to the HTML display elements
const display = document.getElementById('display');
const historyDisplay = document.getElementById('history');
let expression = '';

// Add a number or operator to the screen
function appendValue(value) {
    if (display.value === 'Error') {
        expression = '';
        historyDisplay.innerText = '';
    }
    expression += value;
    updateDisplay();
}

// Clear everything (AC)
function clearDisplay() {
    expression = '';
    historyDisplay.innerText = '';
    updateDisplay();
}

// Delete the last character (Backspace)
function deleteLast() {
    if (display.value === 'Error') {
        clearDisplay();
        return;
    }
    expression = expression.slice(0, -1);
    updateDisplay();
}

// Run the math calculation
function calculate() {
    if (expression === '') return;
    
    try {
        // Show the equation in the top history text
        historyDisplay.innerText = expression.replace(/\*/g, '×').replace(/\//g, '÷') + ' =';
        
        // Execute the mathematical expression safely
        let result = new Function('return ' + expression)();
        
        // Prevent long decimals from overlapping the UI
        if (!Number.isInteger(result)) {
            result = parseFloat(result.toFixed(5));
        }
        
        // Set the new expression to the result so the user can keep calculating
        expression = result.toString();
        display.value = expression;
    } catch (error) {
        display.value = 'Error';
        expression = '';
    }
}

// Sync the visual display with the internal expression variable
function updateDisplay() {
    if (expression === '') {
        display.value = '';
    } else {
        // Convert * and / to actual math symbols for readability
        display.value = expression.replace(/\*/g, '×').replace(/\//g, '÷');
    }
}

// Enable keyboard typing support
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    // Allow numbers and math operators
    if (/[0-9\+\-\*\/\%\.]/.test(key)) {
        event.preventDefault();
        appendValue(key);
    } 
    // Allow Enter or = to calculate
    else if (key === 'Enter' || key === '=') {
        event.preventDefault();
        calculate();
    } 
    // Allow Backspace to delete
    else if (key === 'Backspace') {
        event.preventDefault();
        deleteLast();
    } 
    // Allow Escape to clear everything
    else if (key === 'Escape') {
        event.preventDefault();
        clearDisplay();
    }
});