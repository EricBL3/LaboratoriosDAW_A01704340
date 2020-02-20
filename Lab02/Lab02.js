
//Función que pide un # y produce una tabla del 1 al número dado con los cuadrados y cubos.
function tablaNum()
{
	let num = prompt("Escribe un número")
	//se crea la tabla
	let table = document.createElement("table")
	table.setAttribute("id", "tabla")
	document.getElementById("funcion1").appendChild(table)
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
		document.getElementById("tabla").appendChild(numero)

		//segunda columna es el cuadrado
		let cuadrado = document.createElement("td")
		let val2 = document.createTextNode(Math.pow(i, 2))
		cuadrado.appendChild(val2)
		document.getElementById("tabla").appendChild(cuadrado)

		//tercera columna es el cubo
		let cubo = document.createElement("td")
		let val3 = document.createTextNode(Math.pow(i,3))
		cubo.appendChild(val3)
		document.getElementById("tabla").appendChild(cubo)
	}
}

//
function suma()
{

}