var html = document.querySelector("html");
html.addEventListener("keydown", function(event){
	console.log(event.key);
	var text = document.calc.txt.value;
	if(parseInt(event.key)){
		text += event.key;
		document.calc.txt.value = text;
	}else if(event.key == '+' || event.key == "-" || event.key == "*" || event.key == "/"){
		text += event.key;
		document.calc.txt.value = text;
	}else if(event.key == "Enter"){
		text = eval(text);
		document.calc.txt.value = eval(text);
	}else if(event.key == "Backspace"){
		text = text.slice(0, text.length-1);
		document.calc.txt.value = text;
	}else if(event.key == "(" || event.key == ")")
	{
		text += event.key;
		document.calc.txt.value = text;
	}
});
