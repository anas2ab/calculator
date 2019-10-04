var output = document.getElementById("output");
var full = document.getElementById("full");
var add = 0.0;
var multiply = 0.0;
var divide = 0.0;
var subtract = 0.0;
var sin = 0.0;

document.getElementById("equals").onclick = function() {
	text = full.innerHTML;

	if(text.includes("+")) {
		add += parseFloat(output.innerHTML, 10);
		full.innerHTML += " = ";
		full.innerHTML += add;
		output.innerHTML = add;
	}
	if(text.includes("-")) {
		subtract -= parseFloat(output.innerHTML, 10);
		full.innerHTML += " = ";
		full.innerHTML += subtract;
		output.innerHTML = subtract;
	}	
	if(text.includes("*")) {
		multiply *= parseFloat(output.innerHTML, 10);
		full.innerHTML += " = ";
		full.innerHTML += multiply;
		output.innerHTML = multiply;
	}
	if(text.includes("/")) {
		divide /= parseInt(output.innerHTML, 10);
		full.innerHTML += " = ";
		full.innerHTML += divide;
		output.innerHTML = divide;
	}
	if(text.includes("SIN")) {
		sin = parseFloat(output.innerHTML, 10);
		var elem = document.getElementById("deg");
		if (elem.innerHTML == "RAD") sin = Math.sin(sin);
		else sin = Math.sin(sin * Math.PI/180.0);
		full.innerHTML = " = ";
		full.innerHTML = sin;
		output.innerHTML = sin;
	}	
};
document.getElementById("sin").onclick = function() {
	output.innerHTML = "";
	full.innerHTML = "SIN(";
};
document.getElementById("add").onclick = function() {
	add = parseFloat(full.innerHTML, 10);
	full.innerHTML += " + ";
	output.innerHTML = "";

};

document.getElementById("subtract").onclick = function() {
	subtract = parseFloat(full.innerHTML, 10);
	full.innerHTML += " - ";
	output.innerHTML = "";

};

document.getElementById("multiply").onclick = function() {
	multiply = parseInt(full.innerHTML, 10);
	full.innerHTML += " * ";
	output.innerHTML = "";

};

document.getElementById("divide").onclick = function() {
	divide = parseInt(full.innerHTML, 10);
	full.innerHTML += " / ";
	output.innerHTML = "";

};
document.getElementById("4").onclick = function() {
	document.getElementById("output").innerHTML += "4";
	full.innerHTML += "4";
};
document.getElementById("9").onclick = function() {
	document.getElementById("output").innerHTML += "9";
	full.innerHTML += "9";
};

document.getElementById("8").onclick = function() {
	document.getElementById("output").innerHTML += "8";
	full.innerHTML += "8";
};
document.getElementById("7").onclick = function() {
	document.getElementById("output").innerHTML += "7";
	full.innerHTML += "7";
};
document.getElementById("6").onclick = function() {
	document.getElementById("output").innerHTML += "6";
	full.innerHTML += "6";
};
document.getElementById("5").onclick = function() {
	document.getElementById("output").innerHTML += "5";
	full.innerHTML += "5";
};
document.getElementById("1").onclick = function() {
	document.getElementById("output").innerHTML += "1";
	full.innerHTML += "1";
};
document.getElementById("2").onclick = function() {
	document.getElementById("output").innerHTML += "2";
	full.innerHTML += "2";
};
document.getElementById("3").onclick = function() {
	document.getElementById("output").innerHTML += "3";
	full.innerHTML += "3";
};
document.getElementById("0").onclick = function() {
	document.getElementById("output").innerHTML += "0";
	full.innerHTML += "0";
};
document.getElementById("clear").onclick = function() {
	document.getElementById("output").innerHTML = "";
	full.innerHTML = "";
};

document.getElementById("deg").onclick = function() {
	var elem = document.getElementById("deg");
	if (elem.innerHTML == "RAD") elem.innerHTML = "DEG";
	else elem.innerHTML = "RAD";

};

document.getElementById("sqrt").onclick = function() {
	output.innerHTML = Math.sqrt(parseInt(output.innerHTML, 10));
	full.innerHTML = output.innerHTML;
};
document.getElementById("decimal").onclick = function() {
	output.innerHTML += ".";
	full.innerHTML += ".";
};