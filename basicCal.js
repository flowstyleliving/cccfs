var num1 = parseInt(prompt("Please enter first number"));
var num2 = parseInt(prompt("Please enter second number"));
var result = "";
var op = prompt("What operator would you like to use? " + num1 + " (+ || - || * || /) " + num2);

if (op === "+"){
	result = num1 + num2;
}

else if (op === "-"){
	result = num1 - num2;
}

else if (op === "*"){
	result = num1 * num2;
}

else if (op === "/"){
	result = num1 / num2;
}

else {
	result = "You f'd up bro.";
}

prompt(result);
