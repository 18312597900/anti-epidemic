var typeWords = document.getElementById("typeWords");
var i = 0, j=0, timer, flag = 1;
// var str1 = "岂曰无衣，与子同袍";
var str2 = "2017级1班 黎炳良";

function typing1(){
	if(flag){
			timer = setInterval(function(){
					typeWords.innerHTML = str2.slice(0, i++) + "|";
					if(i == str2.length+1){
						clearInterval(timer);
						flag = 0;
						//typing1();
					}
			}, 150)
	}

}

window.onload = typing1;