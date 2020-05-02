<?php
	session_start();
	require_once("model.php");

	include("_header.html");
	include("partials/_nav.html");

	include("partials/_mensajes.html");

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
	include("partials/_modal.html");
	include("partials/_queryMaterial.html");

	if(isset($_POST["Descripcion"]))
		$descripcion = htmlspecialchars($_POST["Descripcion"]);
	else
		$descripcion = "";

	if(isset($_POST["Costo"]))
		$costo = htmlspecialchars($_POST["Costo"]);
	else
		$costo = "";
	
	echo queryMaterial($descripcion, $costo);
	include("partials/_creaMaterial.html");
	include("partials/_modificaMaterial.html");


	include("_footer.html");
?>