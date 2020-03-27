<?php
	session_start();

	if(isset($_SESSION["username"]))
		include("modificarCuentaPersonal.html");

?>