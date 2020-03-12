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

	#función lista
	$menor_mayor1 = $arreglo1;
	sort($menor_mayor1);
	$mayor_menor1 = $arreglo1;
	arsort($mayor_menor1);
	$menor_mayor2 = $arreglo2;
	sort($menor_mayor2);
	$mayor_menor2 = $arreglo2;
	arsort($mayor_menor2);

	#función tabla
	function crearTabla($n)
	{
		$data = array();
		for($i = 1; $i <= $n; $i++)
		{
			array_push($data, array("n"=>$i, "n²"=>pow($i, 2), "n³"=>pow($i,3)));
		}
		return $data;
	}
	$datos1 = crearTabla(5);
	$datos2 = crearTabla(10);


	#función boy or girl
	function boy_or_girl($user)
	{
		$count = strlen(count_chars($user, 3));
		if($count %2 == 0)
			return true;
		else
			return false;
	}

	$user1 = "wjmzbmr";
	$user2 = "xiaodao";
	$respuesta1 = boy_or_girl($user1);
	$respuesta2 = boy_or_girl($user2);


	include("partials/_funciones.html");
	include("partials/_preguntas.html");
	include("partials/_referencias.html");

	include("_footer.html");
?>
