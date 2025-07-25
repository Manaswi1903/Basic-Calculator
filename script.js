// Get display element
const display = document.getElementById('display');

// Append numbers to display
function appendNumber(number) {
  // Prevent leading multiple zeros
  if (display.value === "0") {
    display.value = number;
  } else {
    display.value += number;
  }
}

// Append operator (+, -, *, /)
function appendOperator(operator) {
  const lastChar = display.value.slice(-1);
  // Prevent multiple consecutive operators
  if (["+", "-", "*", "/"].includes(lastChar)) {
    display.value = display.value.slice(0, -1) + operator;
  } else {
    display.value += operator;
  }
}

// Clear the entire display
function clearDisplay() {
  display.value = "";
}

// Delete the last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate result using eval()
function calculateResult() {
  try {
    const result = eval(display.value);
    display.value = result;
  } catch (error) {
    display.value = "Error";
  }
}
