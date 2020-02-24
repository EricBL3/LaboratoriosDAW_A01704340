document.getElementById("ok").onclick = function()
{
	let contraseña = document.getElementById("contraseña").value;
	let confirmar = document.getElementById("confirmar").value;
	
	
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