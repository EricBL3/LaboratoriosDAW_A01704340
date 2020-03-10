<?php
	include("_header.html");

	include("partials/_nav.html");

	#Función promedios
	$arreglo1 = array(1,2,3,4,5);
	$arreglo2 = array(90, 80, 183, 87, 32, 19);

	function promedio($arr)
	{
		return array_sum($arr)/count($arr);
	}
	$promedio1 = promedio($arreglo1);
	$promedio2= promedio($arreglo2);

	#Función mediana
	function median($arr)
	{
		sort($arr);
		$count = count($arr);
		$index = floor($count/2);
		if($count & 1)
			return $arr[$index];
		else
			return ($arr[$index-1] + $arr[$index])/2;
	}
	$mediana1 = median($arreglo1);
	$mediana2 = median($arreglo2);



	include("partials/_funciones.html");
	include("partials/_preguntas.html");
	include("partials/_referencias.html");

	include("_footer.html");
?>
