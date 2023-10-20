var display = document.getElementById("display");
var currentInput = "";
var currentOperator = "";
var memory = 0;

document.querySelectorAll(".number").forEach(function (button) {
	button.addEventListener("click", function () {
		currentInput += button.textContent;
		display.textContent = currentInput;
	});
});

document.querySelectorAll(".operator").forEach(function (button) {
	button.addEventListener("click", function () {
		if (currentOperator !== "") {
			calculate();
		}
		currentOperator = button.textContent;
		memory = parseFloat(currentInput);
		currentInput = "";
	});
});
document.getElementById("calculate").addEventListener("click", calculate);

document.getElementById("clear").addEventListener("click", function () {
	currentInput = "";
	currentOperator = "";
	memory = 0;
	display.textContent = "0";
});

function calculate() {
	if (currentInput !== "") {
		var currentValue = parseFloat(currentInput);
		switch (currentOperator) {
			case "+":
			memory += currentValue;
			break;
			case "-":
			memory -= currentValue;
			break;
			case "x":
			memory *= currentValue;
			break;
			case "/":
			if (currentValue !== 0) {
				memory /= currentValue;
			} else {
				alert("Division par zéro !");
			}
			break;
		}
		display.textContent = memory;
		currentInput = "";
		currentOperator = "";
	}
}