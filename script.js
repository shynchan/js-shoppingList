var first = document.getElementById("first");
var input = document.getElementById("input");
var enter = document.getElementById("enter");
var ul = document.getElementById("ul")

first.addEventListener('click', function(){
	first.classList.toggle('done')
})


enter.addEventListener('click', function(){
	if (input.value.length !== 0){
		var li = document.createElement('li');
	 li.appendChild(document.createTextNode(input.value));
	 ul.appendChild(li);
	 input.value = "";
	}

})