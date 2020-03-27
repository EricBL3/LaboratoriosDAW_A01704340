<?php
	session_start();

	if(isset($_POST["oldUser"]) && isset($_POST["newUser"]))
	{
		if($_POST["oldUser"] === $_SESSION["username"])
			$_SESSION["username"] = $_POST["newUser"];
	}

	include("verCuenta.html");

?>