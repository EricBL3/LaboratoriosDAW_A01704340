<?php
    session_start();
    require_once("model.php");

	if(isset($_POST["tiposBuscar"]))
		$tipo = htmlspecialchars($_POST["tiposBuscar"]);
	else
		$tipo = "";

	if(isset($_POST["lugaresBuscar"]))
		$lugar = htmlspecialchars($_POST["lugaresBuscar"]);
	else
		$lugar = "";

	echo consultar_incidentes($tipo, $lugar);

?>