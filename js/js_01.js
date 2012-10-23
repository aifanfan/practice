var changeStyle = function (elem, attr, value){
	elem.style[attr] = value
};
window.onload = function (){
	var aBtn = document.getElementsByTagName("input");
	var oDiv = document.getElementById("div1");
	var aAtt = ["width", "height", "background", "display", "display"];
	var aVal = ["200px", "200px", "red", "none", "block"];
	for (var i = 0; i < aBtn.length; i++){
		aBtn[i].index = i;
		aBtn[i].onclick = function(){
			this.index == aBtn.length - 1 && (oDiv.style.cssText = "");
			changeStyle(oDiv, aAtt[this.index], aVal[this.index])
		}
	}
}
