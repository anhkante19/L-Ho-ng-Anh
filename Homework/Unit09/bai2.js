var input=document.getElementsByTagName('input')
document.getElementById('check').addEventListener('click',function(){
	for (var i = 0; i < input.length; i++) {
		input[i].checked=true;
	}
})
document.getElementById('uncheck').addEventListener('click',function(){
	for (var j = 0; j < input.length; j++) {
		input[j].checked=false;
	}
})
