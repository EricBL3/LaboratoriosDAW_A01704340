<?php
	//conectarse a la bd
	function conectar_bd()
	{
		$conexion_bd = mysqli_connect("mysql1008.mochahost.com", "dawbdorg_1704340", "1704340", "dawbdorg_A01704340");
		if($conexion_bd == NULL)
			die("La base de datos dawbdorg_A01704340 está en mantenimiento, vuelve a intentarlo más tarde...");
		
		$conexion_bd->set_charset("utf8");	
		return $conexion_bd;
	}

	//desconectarse de la bd
	function desconectar_bd($conexion_bd)
	{
		mysqli_close($conexion_bd);
	}
	//obtener todas los registros de un campo de una tabla
    function obtener_registros($tabla, $campo, $id = false)
    {
        $conexion_bd = conectar_bd();
        $array = "";
        $consulta = 'SELECT '.$campo.' FROM '.$tabla;
        if($id){
            $consulta .= ' ORDER BY '.$campo;
        }
        $resultados = $conexion_bd->query($consulta);
        while ($row = mysqli_fetch_array($resultados, MYSQLI_BOTH)){
            $array .= $row["$campo"].",";
        }
        mysqli_free_result($resultados);
        desconectar_bd($conexion_bd);
        $array = explode(",", $array);
        return $array;
    }
	//Consultar un campo de una tabla a partir de su llave
	 //$llave es el valor de la llave del registro que se quiere recuperar
	 //$tabla es el nombre de la tabla pasado como string
	 //$nombreLlave es el nombre de la llave de la tabla (como aparece en la bd) pasado como string
	 //$campo es el nombre del campo que se quiere recuperar (como aparece en la bd) pasado como string
	 function recuperar($llave, $tabla, $nombreLlave, $campo) {

		$conexion_bd = conectar_bd();


		$consulta = "SELECT $campo FROM $tabla WHERE $nombreLlave ='$llave'";
		$resultados = $conexion_bd->query($consulta);
		while ($row = mysqli_fetch_array($resultados, MYSQLI_BOTH)) {
			desconectar_bd($conexion_bd);
			return $row["$campo"];
		}

		desconectar_bd($conexion_bd);
		return 0;
	  }

	//crear select dinámico
	function crear_select($llave, $descripcion, $tabla, $required, $seleccion = 0, $label = "", $busqueda = false)
	{

		$conexion_bd = conectar_bd();

		//poner el label recibido como parametro o por default el nombre de la tabla
		if($label === "")
			$resultado = "<label  for='".$tabla."'>".$tabla."</label>";
		else
			$resultado = "<label  for='".$tabla."'>".$label."</label>";

		if($busqueda)
			$resultado .= "<div class='input-field col s12'><select id='".$tabla."Buscar' name='".$tabla."Buscar' ";
		else
			$resultado .= "<div class='input-field col s12'><select id='".$tabla."' name='".$tabla."' ";
		if($required)
		{
			$resultado .= "required";
		}
		$resultado .= "><option value='' ";
		//si el select es para una busqueda no lleva el disabled para poder buscar sin filtro
		if(!$busqueda)
			$resultado .= "disabled";
		$resultado .= " selected>Selecciona una opción</option>";

		$consulta = "SELECT $llave, $descripcion FROM $tabla";
		$resultados = $conexion_bd->query($consulta);
		while($row = mysqli_fetch_array($resultados, MYSQLI_BOTH))
		{
			$resultado .= "<option value='".$row["$llave"]."' ";
			if($seleccion === $row["$llave"])
			{
				$resultado .= "selected";
			}
			$resultado .= ">".$row["$descripcion"]."</option>";
		}

		desconectar_bd($conexion_bd);
		$resultado .= "</select></div><br/>";
		return $resultado;
	}


?>