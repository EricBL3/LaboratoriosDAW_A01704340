<?php
	  session_start();
	  require_once("model.php");  
	
	  $descripcion = htmlspecialchars($_GET["descripcion"]);
	  $costo = htmlspecialchars($_GET["costo"]);

	  
	  if(isset($descripcion) && isset($costo) )
		{
			echo queryMaterial($descripcion, $costo);
		}
	
		//header("location:index.php");
?>