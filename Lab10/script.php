<?php
	require_once("util.php");
	if ( !(isset($_POST["nombre"]) && isset($_POST["videojuego"]) && isset($_POST["nuevaGen"]))) {
		die();
	}
	$nombre = htmlspecialchars($_POST["nombre"]);
	if(isset($_POST["consolas"]))
		$consolas = $_POST["consolas"];
	else
		$consolas = null;
	$videojuego = htmlspecialchars($_POST["videojuego"]);
	$nuevaGen = htmlspecialchars($_POST["nuevaGen"]);

	$fotoVideojuego = fotoVideojuego($videojuego);
	$comprar = nuevaConsola($nuevaGen);


	include("_header.html");


	include("partials/_resultado.html");

	

	include("_footer.html");
?>