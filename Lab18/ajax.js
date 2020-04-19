function getRequestObject()
{
	if(window.XMLHttpRequest)

		return (new XMLHttpRequest);
	else if(window.ActiveXObject)
	{
		//IE 6-
		return (new ActiveXObject("Microsoft.XMLHTTP"));
	}
	else //no ajax
		return (null);
	
}

function sendRequest(tabla)
{
	request = getRequestObject();
	if(request != null)
	{
		let userInput = document.getElementById("userInput"+tabla);
	
		let url = 'controlador_ajax.php?tabla='+tabla+'&pattern='+userInput.value;
		
		request.open('GET', url, true);
		request.onreadystatechange = 
			function(){
				if(request.readyState == 4)
				{
					let ajaxResponse = document.getElementById("ajaxResponse"+tabla);

					ajaxResponse.innerHTML = request.responseText;
					ajaxResponse.style.visibility = "visible";
				}
			};
		request.send(null);
	}
}

function selectValue(tabla)
{	
	let list = document.getElementById("list");
	let userInput = document.getElementById("userInput"+tabla);
	let input = document.getElementById(tabla);
	let ajaxResponse = document.getElementById("ajaxResponse"+tabla);
	userInput.value = list.options[list.selectedIndex].text;
	input.value = list.options[list.selectedIndex].value;
	ajaxResponse.style.visibility = "hidden";
	userInput.focus();
}