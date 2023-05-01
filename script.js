function addToScreen(value) {
  document.getElementById("screen").value += value;
}

function clearScreen() {
  document.getElementById("screen").value = "";
}

function calculate() {
  var equation = document.getElementById("screen").value;
  var result = eval(equation);
  document.getElementById("screen").value = result;
}

function calculateSin() {
  var angle = document.getElementById("screen").value;
  var result = Math.sin(angle * Math.PI / 180);
  document.getElementById("screen").value = result;
}

function calculateCos() {
  var angle = document.getElementById("screen").value;
  var result = Math.cos(angle * Math.PI / 180);
  document.getElementById("screen").value = result;
}

function calculateTan() {
  var angle = document.getElementById("screen").value;
  var result = Math.tan(angle * Math.PI / 180);
  document.getElementById("screen").value = result;
}

function calculateSqrt() {
  var number = document.getElementById("screen").value;
  var result = Math.sqrt(number);
  document.getElementById("screen").value = result;
}
