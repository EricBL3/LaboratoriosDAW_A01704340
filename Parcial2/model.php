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

	function consultar_incidentes($tipo = "", $lugar = "")
	{
		$conexion_bd = conectar_bd();

		$resultado = "<table id='tabla' class='highlight'><thead><tr><th>Fecha</th><th>Tipo de Incidente</th><th>Lugar del Incidente</th></tr></thead><tbody>";

		$consulta = 'SELECT i.fecha AS fecha, t.nombre AS tipo, l.nombre AS lugar';
		$consulta .= ' FROM incidentes AS i, tipos AS t, lugares AS l';
		$consulta .= ' WHERE i.idLugares = l.idLugares AND t.idTipos = i.idTipos';

		if($tipo != "")
			$consulta.= ' AND i.idTipos ='.$tipo;

		if($lugar != "")
			$consulta.= ' AND i.idLugares ='.$lugar;

		$consulta .= ' ORDER BY i.fecha DESC';

		$resultados = $conexion_bd->query($consulta);
		while ($row = mysqli_fetch_array($resultados, MYSQLI_BOTH))
		{
			$resultado .= "<tr>";
			$resultado .= "<td>".$row['fecha']."</td>";
			$resultado .= "<td>".$row['tipo']."</td>";
			$resultado .= "<td>".$row['lugar']."</td>";
			$resultado .= "<td>";
			$resultado .= "</tr>";

		}

		mysqli_free_result($resultados);

		desconectar_bd($conexion_bd);
		$resultado .= "</tbody></table></div>";

		return $resultado;
	}

	function registrarIncidente($idLugares, $idTipos, $fecha)
	{
		$conexion_bd = conectar_bd();

		//preparar consulta
		$dml_insertar = 'CALL registrarIncidente(?,?,?)';
		if(!($statement = $conexion_bd->prepare($dml_insertar)))
		{
			die("Error: (".$conexion_bd->errno.") ".$conexion_bd->error);
			return 0;
		}


		//unir parámetros de la función con la consulta
		//el primer arg es el formato de cada parámetro
		if(!$statement->bind_param("iis", $idLugares, $idTipos, $fecha))
		{
			die("Error en vinculación: (".$statement->errno.") ".$statement->error);
			return 0;
		}

		//Ejecutar inserción
		if(!$statement->execute())
		{
			die("Error en ejecución: (".$statement->errno.") ".$statement->error);
			return 0;
		}

		desconectar_bd($conexion_bd);
		return 1;
	}


?>