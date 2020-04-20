<?php
	session_start();
	require_once("model.php");
	
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
?>