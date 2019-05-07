var tab= document.getElementsByClassName('tab');
var section=document.getElementsByClassName('section');
for(var i=0;i< tab.length; i++){
	tab[i].addEventListener('click', function(){
		for(var j = 0; j < section.length; j++){
			section[j].style.display = "none";
		}
		this.nextElementSibling.style.display = "block";
	})
}