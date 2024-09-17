function appendToDisplay(value) {
  document.getElementById('display').value += value;
}
function cancel(value)
{
	document.getElementById('display').value = 'removeAttribute';
}
function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    const result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}
