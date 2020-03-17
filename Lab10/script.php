<?php
	if ( !(isset($_POST["nombre"]) && isset($_POST["videojuego"]) && isset($_POST["nuevaGen"]))) {
		die();
	  }
	$nombre = htmlspecialchars($_POST["nombre"]);


	include("_header.html");

	include("partials/_resultado.html");

	include("_footer.html");
?>