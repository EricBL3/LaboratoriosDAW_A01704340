
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

document.getElementById("tablaNum").onclick = tablaNum;

//Se pide el resultado de la suma de dos # aleatorios y se muestra si el resultado fue correcto y el tiempo en responder
function suma()
{
	//quitar respuesta anterior
	let child = document.getElementById("respuestas2").lastElementChild;
	while(child)
	{
		document.getElementById("respuestas2").removeChild(child);
		child = document.getElementById("respuestas2").lastElementChild;
	}

	let a = Math.floor(Math.random()*100)
	let b = Math.floor(Math.random()*100)
	var t0 = performance.now()
	let ans = prompt("¿Cúanto es: " + a + "+" + b +"?")
	var t1 = performance.now()
	let respuesta = document.createElement("p")
	let tiempo = document.createElement("p")
	document.getElementById("respuestas2").appendChild(document.createElement("br"))
	
	if(ans == a+b)
	{	
		respuesta.appendChild(document.createTextNode("Verdadero."))
		tiempo.appendChild(document.createTextNode("El tiempo de respuesta fue de " + ((t1-t0)/1000).toFixed(3) + " segundos."))
	}
	else
	{
		respuesta.appendChild(document.createTextNode("Falso."))
		tiempo.appendChild(document.createTextNode("El tiempo de respuesta fue de " + ((t1-t0)/1000).toFixed(3) + " segundos."))
	}
		
	console.log(a+b)
	console.log(ans)
	document.getElementById("respuestas2").appendChild(respuesta)
	document.getElementById("respuestas2").appendChild(tiempo)

		
}

document.getElementById("suma").onclick = suma;

//La funcion recibe un arreglo de numeros y muestra la cantidad de # negativos, de 0's y de valores mayores a 0
function contador(arr)
{


	let negativos = ceros = normal = 0;

	for(let i = 0; i< arr.length; i++)
	{
		if(arr[i] < 0)
			negativos++;
		else if(arr[i] == 0)
			ceros++;
		else
			normal++;
	}

	let textoArreglo = document.createElement("p");
	let textoNegativos = document.createElement("p");
	let textoCeros= document.createElement("p");
	let textoNormal = document.createElement("p");

	textoArreglo.appendChild(document.createTextNode(arr))
	textoNegativos.appendChild(document.createTextNode("Números negativos: " +negativos))
	textoCeros.appendChild(document.createTextNode("Números = 0: " +ceros))
	textoNormal.appendChild(document.createTextNode("Números > 0: " +normal))

	document.getElementById("respuestas3").appendChild(textoArreglo)
	document.getElementById("respuestas3").appendChild(textoNegativos)
	document.getElementById("respuestas3").appendChild(textoCeros)
	document.getElementById("respuestas3").appendChild(textoNormal)

	console.log(arr)
	console.log(negativos)
	console.log(ceros)
	console.log(normal)
}

document.getElementById("contador").onclick = function()
{
	contador([0, -12, 2, 4 , 1 , 5, 3, 0, -5, -4]);
	contador([3,1,0,0,-2-3-5,2,45,9,12]);
};

//La funcion recibe una matriz y regresa un arreglo con los promedios de cada renglon de la matriz
function promedios(matriz)
{
	

	let arr = []
	let avg
	for(let i = 0; i < matriz.length; i++)
	{
		avg = 0
		for(let j = 0; j < matriz[i].length; j++)
		{
			avg += matriz[i][j]
		}
		avg /= matriz[i].length
		arr[i] = avg
	}

	let respuesta = document.createElement("p")
	respuesta.appendChild(document.createTextNode("Promedios: "+arr))
	document.getElementById("respuestas4").appendChild(respuesta)

	console.log(matriz)
	console.log(arr)
}

document.getElementById("promedios").onclick = function()
{
	promedios([[100, 90, 33, 45, 54], [89, 68, 71, 93, 65], [89, 54, 134, 423, 13], [430, 90, 654, 193, 669]]);
	promedios([[1, 2 ,3 ,4], [10, 20 ,30, 40], [50, 100, 150, 200]]);
};

//La funcion recibe un número y muestra los dígitos en orden inverso
function inverso(num)
{
	let ans = 0
	let mod = 0

	let normal = document.createElement("p")
	normal.appendChild(document.createTextNode("El número es: " + num))
	document.getElementById("respuestas5").appendChild(normal)

	while(num > 0)
	{
		ans *= 10;
		mod = num % 10;
		num /= 10;
		num = Math.floor(num);
		ans += mod;
		console.log(num)
		console.log(ans)
	}

	let respuesta = document.createElement("p")
	respuesta.appendChild(document.createTextNode("El inverso es: "+ans))
	document.getElementById("respuestas5").appendChild(respuesta)
	console.log(num)
	console.log(ans)
}

document.getElementById("inverso").onclick = function()
{
	inverso(1234);
	inverso(98765);
};


function problema()
{
	let child = document.getElementById("pokemon").lastElementChild;
	while(child)
	{
		document.getElementById("pokemon").removeChild(child);
		child = document.getElementById("pokemon").lastElementChild;
	}

	let pokemon;
	switch(Math.floor(Math.random()*3))
	{
		case 0:
			pokemon = new Pokemon("Pikachu", "electric")
			break;
		case 1:
			pokemon = new Pokemon("Squirtle", "water")
			break;
		case 2:
			pokemon = new Pokemon("Charmander", "fire")
			break;
	}
	pokemon.attack();
	pokemon.displayImage();

let descripcion = document.createElement("p");
descripcion.setAttribute("id", "descripcion")
descripcion.appendChild(document.createTextNode("Esta función despliega un ataque y un gif de un Pokemon. Esto surgió de un ejercicio que hicimos en la clase de POO en dónde creamos un objeto Pokemon que desplegaba el texto de su ataque. Para este laboratorio le agregué un método al objeto que muestra un gif diferente dependiendo del Pokemon que salga. Al darle click al botón, se muestra aleatoriamente un Pokemon entre Pikachu, Squirtle y Charmander."));
document.getElementById("pokemon").appendChild(descripcion);

}

document.getElementById("problema").onclick = problema;

//cambia el estilo de los botones y muestra información de ayuda
function showInfo(element)
{
	let btn = document.getElementById(element.id);
	btn.style.color = "red";
	btn.style.backgroundColor = "aqua";
	btn.style.fontWeight = "bold";
	btn.parentElement.getElementsByClassName("ayuda")[0].style.visibility = "visible";
}

//regresa el estilo original de los botones y esconde la ayuda
function hideInfo(element)
{
	let btn = document.getElementById(element.id);
	btn.style.color = "white";
	btn.style.backgroundColor = "blue";
	btn.style.fontWeight = "normal";
	btn.parentElement.getElementsByClassName("ayuda")[0].style.visibility = "hidden";
}

buttons = document.getElementsByClassName("btn");
for(let i = 0; i < buttons.length; i++)
{
	buttons[i].onmouseover= function(){
		//se manda el botón en el que se está haciendo mouseover
		showInfo(buttons[i]);
	};

	buttons[i].onmouseout = function()
	{
		hideInfo(buttons[i]);
	}
}
