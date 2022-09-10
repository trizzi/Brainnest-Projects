let displayValue = '0';
let firstOperand = null;
let secondOperand = null;
let firstOperator = null;
let secondOperator = null;
let result = null;
const buttons = document.querySelectorAll('button');

function updateDisplay() {
  const display = document.querySelector('.display');
  display.innerText = displayValue;
  if (displayValue.length > 9) {
    display.innerText = displayValue.substring(0, 9);
  }
  console.log('displaying', display.innerText);
}

updateDisplay();

function clickButton() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
      if (buttons[i].classList.contains('operand')) {
        inputOperand(buttons[i].value);
        updateDisplay();
      } else if (
        buttons[i].classList.contains('operator')
      ) {
        inputOperator(buttons[i].value);
      } else if (buttons[i].classList.contains('equals')) {
        inputEquals();
        updateDisplay();
      } else if (buttons[i].classList.contains('decimal')) {
        inputDecimal(buttons[i].value);
        updateDisplay();
      } else if (buttons[i].classList.contains('percent')) {
        inputPercent(displayValue);
        updateDisplay();
      } else if (buttons[i].classList.contains('sign')) {
        inputSign(displayValue);
        updateDisplay();
      } else if (buttons[i].classList.contains('clear'))
        clearDisplay();
      updateDisplay();
    });
  }
}

clickButton();

function inputOperand(operand) {
  if (firstOperator === null) {
    if (displayValue === '0' || displayValue === 0) {
      displayValue = operand;
    } else if (displayValue === firstOperand) {
      displayValue = operand;
    } else {
      displayValue += operand;
    }
  } else {
    if (displayValue === firstOperand) {
      displayValue = operand;
    } else {
      displayValue += operand;
    }
  }
}

function inputDecimal(dot) {
  if (
    displayValue === firstOperand ||
    displayValue === secondOperand
  ) {
    displayValue = '0';
    displayValue += dot;
  } else if (!displayValue.includes(dot)) {
    displayValue += dot;
  }
}

function inputPercent(num) {
  displayValue = (num / 100).toString();
  console.log('percent', displayValue);
}

function inputSign(num) {
  displayValue = (num * -1).toString();
}

function clearDisplay() {
  displayValue = '0';
  firstOperand = null;
  secondOperand = null;
  firstOperator = null;
  secondOperator = null;
  result = null;
}

function operate(x, y, op) {
  if (op === '+') {
    return x + y;
  } else if (op === '-') {
    return x - y;
  } else if (op === '*') {
    return x * y;
  } else if (op === '/') {
    if (y === 0) {
      return '0';
    } else {
      return x / y;
    }
  }
}

function inputOperator(operator) {
  if (firstOperator != null && secondOperator === null) {
    secondOperator = operator;
    secondOperand = displayValue;
    result = operate(
      Number(firstOperand),
      Number(secondOperand),
      firstOperator
    );
    displayValue = roundAccurately(result, 15).toString();
    firstOperand = displayValue;
    result = null;
  } else if (
    firstOperator != null &&
    secondOperator != null
  ) {
    secondOperand = displayValue;
    result = operate(
      Number(firstOperand),
      Number(secondOperand),
      secondOperator
    );
    secondOperator = operator;
    displayValue = roundAccurately(result, 15).toString();
    firstOperand = displayValue;
    result = null;
  } else {
    //2nd click - handles first operator input
    firstOperator = operator;
    firstOperand = displayValue;
  }
  console.log('The first operator', firstOperator);
  console.log('The second operator', secondOperator);
  console.log('The first operand', firstOperand);
  console.log('The second operand', secondOperand);
  console.log('the result is ', result);
}

function inputEquals() {
  if (firstOperator === null) {
    displayValue = displayValue;
  } else if (secondOperator != null) {
    secondOperand = displayValue;
    result = operate(
      Number(firstOperand),
      Number(secondOperand),
      secondOperator
    );
    if (result === '0') {
      displayValue = '0';
    } else {
      displayValue = roundAccurately(result, 15).toString();
      firstOperand = displayValue;
      secondOperand = null;
      firstOperator = null;
      secondOperator = null;
      result = null;
    }
  } else {
    secondOperand = displayValue;
    result = operate(
      Number(firstOperand),
      Number(secondOperand),
      firstOperator
    );
    if (result === '0') {
      displayValue = '0';
    } else {
      displayValue = roundAccurately(result, 15).toString();
      firstOperand = displayValue;
      secondOperand = null;
      firstOperator = null;
      secondOperator = null;
      result = null;
    }
  }
}

function roundAccurately(num, places) {
  return parseFloat(
    Math.round(num + 'e' + places) + 'e-' + places
  );
}
