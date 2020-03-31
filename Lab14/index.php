<?php
	require_once("model.php");

	include("_header.html");
	include("partials/_nav.html");

	include("partials/_form.html");

	echo consultar_entregas();

	include("partials/_preguntas.html");
	include("partials/_referencias.html");
	include("_footer.html");
?>