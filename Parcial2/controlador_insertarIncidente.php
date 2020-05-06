<?php
	session_start();
	require_once("model.php");

	$idLugares = htmlspecialchars($_POST["lugares"]);
	$idTipos = htmlspecialchars($_POST["tipos"]);

	date_default_timezone_set("America/Mexico_City");
	$fecha = date("Y-m-d H:i:s");

	if(isset($idLugares) && isset($idTipos) && isset($fecha))
	{
		if(registrarIncidente($idLugares, $idTipos, $fecha))
		{
			$_SESSION["mensaje"] = "Se registro un nuevo incidente!";
		}
		else
		{
			$_SESSION["warning"] = "Hubo un error al registrar el incidente!";
		}
	}

	header("location:index.php");
?>