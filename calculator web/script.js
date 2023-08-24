let input = '';

function appendNumber(number) {
  input += number;
  document.getElementById('result').value = input;
}

function appendOperator(operator) {
  input += operator;
  document.getElementById('result').value = input;
}

function clearInput() {
  input = '';
  document.getElementById('result').value = '';
}

function calculate() {
  try {
    input = eval(input).toString();
    document.getElementById('result').value = input;
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}
