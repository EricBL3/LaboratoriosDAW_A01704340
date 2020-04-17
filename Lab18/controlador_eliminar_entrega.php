<?php 
  session_start();
  require_once("model.php");  

  $fecha = htmlspecialchars($_GET["fecha"]);
  $clave = recuperar($fecha, "Clave");
  $rfc = recuperar($fecha, "RFC");
  $numero = recuperar($fecha, "Numero");
  $cantidad = recuperar($fecha, "Cantidad");
  
  
  if(isset($clave) && isset($rfc) && isset($numero) && isset($fecha) && isset($cantidad))
	{
		if(eliminar_entrega($clave, $rfc, $numero, $cantidad, $fecha))
		{
			$_SESSION["mensaje"] = "Se eliminó la entrega!";
		}
		else
		{
			$_SESSION["warning"] = "Hubo un error al eliminar la entrega!";
		}
	}

	header("location:index.php");
?> 