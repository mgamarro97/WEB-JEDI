function hide(){
	if(document.getElementById("finder").style.width === "20%"){
		document.getElementById("finder").style.width = "0%";
		document.getElementById("iframe").style.width = "100%";
		document.getElementById("finder_icon").style.left = "0%";
	}

	else{
		document.getElementById("finder").style.width = "20%";
		document.getElementById("iframe").style.width = "80%";
		document.getElementById("finder_icon").style.left = "20%";
	}
}
