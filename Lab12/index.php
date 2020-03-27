<?php
	session_start();

	$_SESSION["username"] = "admin";
	$_SESSION["password"] = "1234";
	$_SESSION["nombre"] = "Eric Buitrón";
	$_SESSION["foto"] = "https://cdn.mos.cms.futurecdn.net/qcXNfw7aYK3FwqxW3zepvS.jpg";

	include("verCuenta.html");
	
	

?>