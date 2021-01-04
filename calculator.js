function digitPressed(input) {
	var digit = input.textContent;
	document.getElementById("result").innerHTML += digit;
}

function deleteContent() {
	document.getElementById("result").innerHTML = "";
}

function plusMinus() {
	document.getElementById("result").innerHTML = document.getElementById("result").innerHTML * -1;
}

function percentage() {
	document.getElementById("result").innerHTML = document.getElementById("result").innerHTML / 100;
}

var operand1 = "";
function add() {
	operand1 = document.getElementById("result").innerHTML;
	deleteContent();
}

function equal() {
	var operand2 = document.getElementById("result").innerHTML;
	var sum = parseInt(operand1) + parseInt(operand2);
	document.getElementById("result").innerHTML = sum;
}
function divide() {
	
}