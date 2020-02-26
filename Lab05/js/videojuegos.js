function crearRespuesta()
{
	let nombre = document.getElementById("nombre").value;
	let pc = document.getElementById("pc").checked;
	let nintendo = document.getElementById("switch").checked
	let xbox = document.getElementById("xbox").checked
	let play = document.getElementById("play").checked
	let cel = document.getElementById("cel").checked
	let favorito = document.getElementById("juegoFav").value
	let newGen = getNewGen();

	let texto = document.getElementById("respuestas"); 

	texto.innerHTML = "Hola " + nombre + "!!! " + "Te gusta jugar en:<ol>";
	if(pc)
		texto.innerHTML += "<li>PC</li>";
	if(nintendo)
		texto.innerHTML += "<li>Switch</li>";
	if(xbox)
		texto.innerHTML += "<li>Xbox One</li>";
	if(play)
		texto.innerHTML += "<li>PlayStation 4</li>";
	if(cel)
		texto.innerHTML += "<li>Celular</li>";		
		texto.innerHTML +="</ol> Tu juego favorito es: " + favorito;
	if(newGen != undefined)
	 	texto.innerHTML += "!<br>" + newGen + " comprarte una consola de la nueva generación."

}

function getNewGen()
{
	let radios = document.getElementById("miForma").getElementsByClassName("newGen");
	let val;
	for(let i = 0; i < radios.length; i++)
	{
		if(radios[i].checked)
		{
			val = radios[i].value;
			break;
		}
	}

	return val;
}

document.getElementById("btn").onclick = crearRespuesta;