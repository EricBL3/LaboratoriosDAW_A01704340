<?php
	session_start();
	require_once("model.php");
	$claves = obtener_registros("Materiales", "Clave");
	$clave = end($claves)+10;
	$descripcion = htmlspecialchars($_POST["descripcion"]);
	$costo = htmlspecialchars($_POST["costo"]);
	$impuesto = htmlspecialchars($_POST["impuesto"]);

	if(isset($clave) && isset($descripcion) && isset($costo) && isset($impuesto))
	{
		if(creaMaterial($clave, $descripcion, $costo, $impuesto))
		{
			$_SESSION["mensaje"] = "Se registro un nuevo material!";
		}
		else
		{
			$_SESSION["warning"] = "Hubo un error al registrar el material!";
		}
	}

	header("location:index.php");
?> 