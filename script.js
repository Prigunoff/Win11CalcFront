function appendToResult(val) {
	document.getElementById('result').value += val;
	}

function clearResult() {
	document.getElementById('result').value = '';
	}

function calculate() {
	try {
	var result = eval(document.getElementById('result').value);
	document.getElementById('result').value = result;
		} catch (error) {
			alert('Invalid input!');
		}
	}