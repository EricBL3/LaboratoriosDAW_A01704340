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

function sendRequest()
{
	request = getRequestObject();
	if(request != null)
	{
		let userInput = document.getElementById("userInput");
		let url = 'ssajax.php?pattern='+userInput.value;
		
		request.open('GET', url, true);
		request.onreadystatechange = 
			function(){
				if(request.readyState == 4)
				{
					let ajaxResponse = document.getElementById("ajaxResponse");
					ajaxResponse.innerHTML = request.responseText;
					ajaxResponse.style.visibility = "visible";
				}
			};
		request.send(null);
	}
}

function selectValue()
{
	let list = document.getElementById("list");
	let userInput = document.getElementById("userInput");
	let ajaxResponse = document.getElementById("ajaxResponse");

	userInput.value = list.options[list.selectedIndex].text;
	ajaxResponse.style.visibility = "hidden";
	userInput.focus();
}