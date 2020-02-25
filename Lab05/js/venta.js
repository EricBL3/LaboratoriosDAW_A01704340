

function agregar(producto)
{
	let num = 0;
	let precio = 0;
	//0 es la consola, 1 es el juego y 2 es los joycons
	switch(producto)
	{
		case 0:
			num = Number(document.getElementById("numConsola").innerHTML);
			num++;
			document.getElementById("numConsola").innerHTML = num;
			precio = Number(document.getElementById("PRECIO_CONSOLA").innerHTML)*num;
			document.getElementById("precioConsola").innerHTML = precio.toFixed(2);
			break;
		case 1:
			num = Number(document.getElementById("numJuego").innerHTML);
			num++;
			document.getElementById("numJuego").innerHTML = num;
			precio = Number(document.getElementById("PRECIO_JUEGO").innerHTML)*num;
			document.getElementById("precioJuego").innerHTML = precio.toFixed(2);
			break;
		case 2:
			num = Number(document.getElementById("numJoycon").innerHTML);
			num++;
			document.getElementById("numJoycon").innerHTML = num;
			precio = Number(document.getElementById("PRECIO_JOYCON").innerHTML)*num;
			document.getElementById("precioJoycon").innerHTML = precio.toFixed(2);
			break;
	}
	actualizar();
}

function remover(producto)
{
	//0 es la consola, 1 es el juego y 2 es los joycons
	switch(producto)
	{
		case 0:
			num = Number(document.getElementById("numConsola").innerHTML);
			num--;
			document.getElementById("numConsola").innerHTML = num;
			precio = Number(document.getElementById("PRECIO_CONSOLA").innerHTML);
			precioActual = Number(document.getElementById("precioConsola").innerHTML);
			document.getElementById("precioConsola").innerHTML = (precioActual-precio).toFixed(2);
			break;
		case 1:
			num = Number(document.getElementById("numJuego").innerHTML);
			num--;
			document.getElementById("numJuego").innerHTML = num;
			precio = Number(document.getElementById("PRECIO_JUEGO").innerHTML);
			precioActual = Number(document.getElementById("precioJuego").innerHTML);
			document.getElementById("precioJuego").innerHTML = (precioActual-precio).toFixed(2);
			break;
		case 2:
			num = Number(document.getElementById("numJoycon").innerHTML);
			num--;
			document.getElementById("numJoycon").innerHTML = num;
			precio = Number(document.getElementById("PRECIO_JOYCON").innerHTML);
			precioActual = Number(document.getElementById("precioJoycon").innerHTML);
			document.getElementById("precioJoycon").innerHTML = (precioActual-precio).toFixed(2);
			break;
	}
	actualizar();
}

function actualizar()
{
	precioTotal = Number(document.getElementById("precioConsola").innerHTML)+Number(document.getElementById("precioJuego").innerHTML)+Number(document.getElementById("precioJoycon").innerHTML);
	precioIVA = precioTotal*0.08;
	precioFinal = precioTotal+precioIVA;
	
	document.getElementById("precioTotal").innerHTML = precioTotal.toFixed(2);
	document.getElementById("precioIVA").innerHTML = precioIVA.toFixed(2);
	document.getElementById("precioFinal").innerHTML = precioFinal.toFixed(2);

}

document.getElementById("consola+").onclick = function()
{
	agregar(0);
};

document.getElementById("juego+").onclick = function()
{
	agregar(1);
};

document.getElementById("joycons+").onclick = function()
{
	agregar(2);
};

document.getElementById("consola-").onclick = function()
{
	if(Number(document.getElementById("numConsola").innerHTML) > 0)
		remover(0);
};

document.getElementById("juego-").onclick = function()
{
	if(Number(document.getElementById("numJuego").innerHTML) > 0)
		remover(1);
};

document.getElementById("joycons-").onclick = function()
{
	if(Number(document.getElementById("numJoycon").innerHTML) > 0)
		remover(2);
};