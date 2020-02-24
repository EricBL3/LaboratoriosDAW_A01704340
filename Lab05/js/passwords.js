var req1 = req2 = req3 = req4 = false;



function click()
{
	var contraseña = document.getElementById("contraseña").value;
	var confirmar = document.getElementById("confirmar").value;
	
	
	if(contraseña === "" && confirmar === "")
		resultado(0)
	else if( contraseña === confirmar )
		resultado(1)
	else
		resultado(2)
	
}

document.getElementById("ok").onclick = click;

function resultado(res)
{
	let texto = document.getElementById("texto")
	console.log(res);
	switch(res)
	{
		case 0:
			texto.innerHTML = "No se ingresó una contraseña";
			texto.style = "color: red;";
			break;
		case 1:
			texto.innerHTML = "La contraseña es la misma";
			texto.style = "color: green;";
			break;
		case 2:
			texto.innerHTML = "Las contraseñas son diferentes. Intenta de nuevo.";
			texto.style = "color: red;";
			break;
	}

}

contraseña.oninput = function()
{
	checkLength();
	checkNumber();
	checkSpecial();
	checkMayus();

	if(req1 && req2 && req3 && req4)
	{
		if(document.contains(document.getElementById("confirm")))
			document.getElementById("miForma").removeChild(document.getElementById("confirm"))
		document.getElementById("ok").disabled = false;
	}
	else
	{
		if(!document.contains(document.getElementById("confirm")))
		{
			let text = document.createElement("p")
			text.setAttribute("id", "confirm")
			text.innerHTML = "La contraseña todavía no cuenta con todos los requisitos";
			
			document.getElementById("miForma").insertBefore(text, document.getElementById("ok"))
			document.getElementById("ok").disabled = true;
			document.getElementById("texto").innerHTML = "";
		}
	}

}


function checkLength()
{

	if(contraseña.value.length >= 8)
	{
		document.getElementById("length").setAttribute("style", "color: green;");
		req1 = true;
	}
	else
	{
		document.getElementById("length").setAttribute("style", "color: red;");
		req1 = false;
	}
}

function checkNumber()
{
	//checa si tiene un numero
	if(/\d/.test(contraseña.value))
	{
		document.getElementById("num").setAttribute("style", "color: green;");
		req2 = true;
	}
	else
	{
		document.getElementById("num").setAttribute("style", "color: red;");
		req2 = false;
	}
}

function checkSpecial()
{
	//checa si tiene un caracter especial
	if(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/.test(contraseña.value))
	{
		document.getElementById("special").setAttribute("style", "color: green;");
		req3 = true;
	}
	else
	{
		document.getElementById("special").setAttribute("style", "color: red;");
		req3 = false;
	}
}

function checkMayus()
{
	//checa si tiene una mayuscula
	if(/[A-Z]/.test(contraseña.value))
	{
		document.getElementById("mayus").setAttribute("style", "color: green;");
		req4 = true;
	}
	else
	{
		document.getElementById("mayus").setAttribute("style", "color: red;");
		req4 = false;
	}
}