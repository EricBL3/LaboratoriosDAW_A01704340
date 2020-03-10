<?php
	include("_header.html");

	include("partials/_nav.html");

	#Función promedios
	$arreglo1 = array(1,2,3,4,5);
	$arreglo2 = array(90, 80, 183, 87, 32, 19);
	$promedio1 = array_sum($arreglo1)/count($arreglo1);
	$promedio2= array_sum($arreglo2)/count($arreglo2);

	include("partials/_funciones.html");
	include("partials/_preguntas.html");
	include("partials/_referencias.html");

	include("_footer.html");
?>
