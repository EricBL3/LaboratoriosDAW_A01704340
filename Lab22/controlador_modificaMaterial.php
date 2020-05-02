<?php
	session_start();
	require_once("model.php");
	$clave = htmlspecialchars($_POST["Materiales"]);
	$descripcion = htmlspecialchars($_POST["des"]);
	$costo = htmlspecialchars($_POST["cost"]);
	$impuesto = htmlspecialchars($_POST["imp"]);

	if(isset($clave) && isset($descripcion) && isset($costo) && isset($impuesto))
	{
		if(modificaMaterial($clave, $descripcion, $costo, $impuesto))
		{
			$_SESSION["mensaje"] = "Se modificó el material!";
		}
		else
		{
			$_SESSION["warning"] = "Hubo un error al modificar el material!";
		}
	}

	header("location:index.php");
?> 