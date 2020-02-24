document.getElementById("ok").onclick = function()
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
}


function checkLength()
{

	if(contraseña.value.length >= 8)
	{
		document.getElementById("length").setAttribute("style", "color: green;");
		
	}
	else
	{
		document.getElementById("length").setAttribute("style", "color: red;");
	}
}

function checkNumber()
{
	//checa si tiene un numero
	if(/\d/.test(contraseña.value))
	{
		document.getElementById("num").setAttribute("style", "color: green;");
	}
	else
	{
		document.getElementById("num").setAttribute("style", "color: red;");
	}
}

function checkSpecial()
{
	//checa si tiene un caracter especial
	if(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/.test(contraseña.value))
	{
		document.getElementById("special").setAttribute("style", "color: green;");
	}
	else
	{
		document.getElementById("special").setAttribute("style", "color: red;");
	}
}

function checkMayus()
{
	//checa si tiene una mayuscula
	if(/[A-Z]/.test(contraseña.value))
	{
		document.getElementById("mayus").setAttribute("style", "color: green;");
	}
	else
	{
		document.getElementById("mayus").setAttribute("style", "color: red;");
	}
}