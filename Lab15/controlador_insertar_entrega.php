<?php
	require_once("model.php");

	$material = htmlspecialchars($_POST["Materiales"]);
	$proveedor = htmlspecialchars($_POST["Proveedores"]);
	$proyecto = htmlspecialchars($_POST["Proyectos"]);
	$fecha = htmlspecialchars($_POST["fecha"]);
	$cantidad = htmlspecialchars($_POST["cantidad"]);

	if(isset($material) && isset($proveedor) && isset($proyecto) && isset($fecha) && isset($cantidad))
	{
		agregar_entrega($material, $proveedor, $proyecto, $fecha, $cantidad);
	}

	header("location:index.php");
?>