var html = document.querySelector("html");
html.addEventListener("keydown", function(event){
	console.log(event.key);
	var text = document.calc.txt.value;
	//if the number input is a number
	if(parseInt(event.key)){		//parseInt(string) is NaN ; return false only the parseInt(int) is true;
		text += event.key;
		document.calc.txt.value = text;
	}else if(event.key == '+' || event.key == "-" || event.key == "*" || event.key == "/"){
		//if input is a operator key
		text += event.key;
		document.calc.txt.value = text;
	}else if(event.key == "Enter"){
		//if input is a enter key
		text = eval(text);
		document.calc.txt.value = eval(text);
	}else if(event.key == "Backspace"){
		//if input is a backspace button
		clearOne();
	}else if(event.key == "."){
		text += event.key;
		document.calc.txt.value = text;
	}
	else if(event.key == "(" || event.key == ")"){
		text += event.key;
		document.calc.txt.value = text;
	}
});

function clearOne(){
	let text = document.calc.txt.value;
	text = text.slice(0, text.length-1);
	document.calc.txt.value = text;
}
