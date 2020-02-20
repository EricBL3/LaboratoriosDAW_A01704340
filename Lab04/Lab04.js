
//Función que pide un # y produce una tabla del 1 al número dado con los cuadrados y cubos.
function tablaNum()
{
	if(document.body.contains(document.getElementById("tabla")))
	{
		let element = document.getElementById("tabla")
		element.parentNode.removeChild(element)
	}

	let num = prompt("Escribe un número")
	//se crea la tabla
	let table = document.createElement("table")
	table.setAttribute("id", "tabla")
	document.getElementById("funcion1").appendChild(table)
	//se crea la primera fila con los nombres de cada columna
	let tr_header = document.createElement("tr")
	tr_header.setAttribute("id", "tr_header")
	document.getElementById("tabla").appendChild(tr_header)

	let td_num = document.createElement("td")
	td_num.appendChild(document.createTextNode("num"))
	document.getElementById("tr_header").appendChild(td_num)
	
	let td_num2 = document.createElement("td")
	td_num2.appendChild(document.createTextNode("num²"))
	document.getElementById("tr_header").appendChild(td_num2)

	let td_num3 = document.createElement("td")
	td_num3.appendChild(document.createTextNode("num³"))
	document.getElementById("tr_header").appendChild(td_num3)


	//se le agregan las filas con sus datos a la tabla
	for(let i = 1; i <= num; i++)
	{
		let tr = document.createElement("tr")
		tr.setAttribute("id", "tr"+i)
		document.getElementById("tabla").appendChild(tr)

		//primera columna es el valor
		let numero = document.createElement("td")
		let val = document.createTextNode(i)
		numero.appendChild(val)
		document.getElementById("tr"+i).appendChild(numero)

		//segunda columna es el cuadrado
		let cuadrado = document.createElement("td")
		let val2 = document.createTextNode(Math.pow(i, 2))
		cuadrado.appendChild(val2)
		document.getElementById("tr"+i).appendChild(cuadrado)

		//tercera columna es el cubo
		let cubo = document.createElement("td")
		let val3 = document.createTextNode(Math.pow(i,3))
		cubo.appendChild(val3)
		document.getElementById("tr"+i).appendChild(cubo)
	}
}



//
function suma()
{

}