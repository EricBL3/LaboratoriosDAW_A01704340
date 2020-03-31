<?php
	require_once("model.php");

	include("_header.html");
	include("partials/_nav.html");

	include("partials/_form.html");

	if(isset($_POST["Proyectos"]))
		$proyectos = htmlspecialchars($_POST["Proyectos"]);
	else
		$proyectos = "";

	if(isset($_POST["Proveedores"]))
		$proveedores = htmlspecialchars($_POST["Proveedores"]);
	else
		$proveedores = "";
		
	if(isset($_POST["Materiales"]))
		$materiales = htmlspecialchars($_POST["Materiales"]);
	else
		$materiales = "";

	echo consultar_entregas($proyectos, $proveedores, $materiales);

	include("partials/_preguntas.html");
	include("partials/_referencias.html");
	include("_footer.html");
?>