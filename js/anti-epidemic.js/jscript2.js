var cells = document.getElementsByClassName("cells");
var box = document.getElementsByClassName("box")
for(var i=0; i<cells.length; ++i){
	cells[i].onmouseover = function(){
		this.style.cursor = "url(images/p3/no4/feather.png), auto";
	}
}

for(var i=0; i<box.length; ++i){
	box[i].onmouseover = function(){
		animate(this,{top:-335,height:400});
		this.style.backgroundColor = "#fff";
	
	}
}
for(var i=0; i<box.length; ++i){
	box[i].onmouseout = function(){
		animate(this,{top:-5,height:73});
	}
}