<?php
	function conectar_bd()
	{
		$conexion_bd = mysqli_connect("localhost", "root", "", "Lab14");
		if($conexion_bd == NULL)
			die("La base de datos Lab14 está en mantenimiento, vuelve a intentarlo más tarde...");
		
		return $conexion_bd;
	}

	function desconectar_bd($conexion_bd)
	{
		mysqli_close($conexion_bd);
	}

?>