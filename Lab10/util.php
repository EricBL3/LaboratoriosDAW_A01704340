<?php

	function fotoVideojuego($videojuego)
	{
		if($videojuego==="bioshock")
			$fotoVideojuego = "images/bioshock.jpeg";
		else if($videojuego==="gta")
			$fotoVideojuego = "images/gta.jpeg";
		else if($videojuego==="borderlands")
			$fotoVideojuego = "images/borderlands.jpeg";
		else if($videojuego==="minecraft")
			$fotoVideojuego = "images/minecraft.jpeg";

		return $fotoVideojuego;
	}

	function nuevaConsola($nuevaGen)
	{
		if($nuevaGen==="si")
			$res = "Si vas a ";
		else if($nuevaGen==="no")
			$res = "No vas a ";
		else	
			$res = "Estas pensando";
		
		return $res;
	}

	function mostrarConsolas($consolas)
	{
		for($i = 0; $i < count($consolas); $i++)
		{
			if($consolas[$i]==="switch")
				$con="Switch";
			else if($consolas[$i]==="play")
				$con="PlayStation 4";
			else if($consolas[$i]==="cel")
				$con="Celular";
			else if($consolas[$i]==="pc")
				$con="PC";
			else if($consolas[$i]==="xbox")
				$con="Xbox One";
			echo "<li>".$con."</li>";
		}
	}

?>