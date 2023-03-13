function appendToResult(val) {
  document.getElementById("result").value += val;
}

function clearResult() {
  document.getElementById("result").value = "";
}

function calculate() {
  try {
    var result = eval(document.getElementById("result").value);
    document.getElementById("result").value = result;
  } catch (error) {
    alert("Invalid input!");
  }
}

function sqrt() {
  let result = document.getElementById("result");
  let value = result.value;
  if (value) {
    let sqrtValue = Math.sqrt(parseFloat(value));
    if (isNaN(sqrtValue)) {
      result.value = "Error";
    } else {
      result.value = sqrtValue;
    }
  }
}

function deleteLastDigit() {
	var result = document.getElementById("result").value;
	document.getElementById("result").value = result.substring(0, result.length-1);
}

function squareNumber() {
	let input = document.getElementById("result");
	let inputValue = input.value;
	let square = parseFloat(inputValue) ** 2;
	input.value = square;
}

function twoSqrtX() {
	let x = document.getElementById("result").value;
	let result = 2 * Math.sqrt(x);
	document.getElementById("result").value = result;
  }