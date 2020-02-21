//Prototipo Pokemon para problema 6
function Pokemon(name, type)
{
	this.name = name;
	this.type = type;
}

Pokemon.prototype.attack = function()
{
	let text = document.createElement("p")
	text.setAttribute("id", "pokeText");
	let message = this.name + " used ";
	if(this.type === "electric")
	{
		text.setAttribute("style", "color: yellow;")
		message += "Thunderbolt. The opponent is paralyzed.";
	}
	else if(this.type === "water")
	{
		text.setAttribute("style", "color: aqua;")
		message += "Water Gun. It was super effective.";
	}
	else if(this.type === "fire")
	{
		text.setAttribute("style", "color: orange;")
		message += "Flamethrower. The opponent now has fire damage.";
	}
	text.appendChild(document.createTextNode(message));
	document.getElementById("pokemon").appendChild(text);
};

Pokemon.prototype.displayImage = function()
{
	let image = document.createElement("img")
	
	if(this.name === "Pikachu")
	{
		image.setAttribute("src", "gifs/pika.gif")
	}
	else if(this.name === "Squirtle")
	{
		image.setAttribute("src", "gifs/squirtle.gif")
	}
	else if(this.name === "Charmander")
	{
		image.setAttribute("src", "gifs/charmander.gif")
	}
	document.getElementById("pokemon").appendChild(image)
};