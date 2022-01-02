function changeButtonColor(){
	document.getElementById("barbutton").style.outline = "none";
	if (document.getElementById("baricon").style.color == "rgb(192, 192, 192)") {
		document.getElementById("baricon").style.color = "rgb(0, 0, 0)";
	}
	else {
		document.getElementById("baricon").style.color = "rgb(192, 192, 192)";
	}
	if (document.getElementById("barbutton").style.borderColor == "rgb(192, 192, 192)") {
		document.getElementById("barbutton").style.borderColor = "rgb(0, 0, 0)";
	}
	else {
		document.getElementById("barbutton").style.borderColor = "rgb(192, 192, 192)";
	}
}