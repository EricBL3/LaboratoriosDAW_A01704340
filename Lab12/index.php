<?php
	session_start();

	$_SESSION["username"] = "admin";
	$_SESSION["password"] = "1234";
	$_SESSION["nombre"] = "Eric Buitrón";
	$_SESSION["foto"] = "uploads/fotoPerfil.jpg";

	include("principal.html");
	
?>