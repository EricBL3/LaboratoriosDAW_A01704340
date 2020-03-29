<?php
	session_start();
	
	$_SESSION["cambio"] = true;
	#Cambio de usuario
	if($_POST["oldUser"]!== "" && $_POST["newUser"] != "")
	{
		if(htmlspecialchars($_POST["oldUser"]) === $_SESSION["username"])
		{
			$_SESSION["username"] = htmlspecialchars($_POST["newUser"]);
		}
		else
		{
			$_SESSION["cambio"] = false;
			header("location:usuarios/configurar.php");
			die();
		}
	}

	#Cambio de contraseña
	if($_POST["oldPwd"]!= "" && $_POST["newPwd"] != "")
	{
		if(htmlspecialchars($_POST["oldPwd"]) === $_SESSION["password"])
		{
			$_SESSION["password"] = htmlspecialchars($_POST["newPwd"]);
		}
		else
		{
			$_SESSION["cambio"] = false;
			header("location:usuarios/configurar.php");
			die();
		}
	}

	#cambiar foto de perfil
	if(isset($_SESSION["foto"]))
	{
		$uploaded = false;
		include("upload.php");

		if($uploaded)
		{
			$_SESSION["foto"] = $target_file;
		}
		

	}

	header("location:controller_cuenta.php");

?>