<?php
	session_start();
	
	include("verCuenta.html");
	if(!isset($_SESSION["username"]))
		echo "<a href='index.php' class='btn btn-primary'>Salir</a>"
	

?>