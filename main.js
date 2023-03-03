var vicky = new Date();
var c = vicky.getMonth()	
if(c>0 && c<4){
	document.write("spring");
	console.log(vicky);
}
else if (c>=4 && c<=7){
	document.write("summer");
    	console.log(vicky);	
}
else if (c>7 && c<11){
	document.write("winter");
		console.log(vicky);
}
	document.write('<br>');