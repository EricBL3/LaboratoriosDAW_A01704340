<?php

	//conectarse a la bd
	function conectar_bd()
	{
		$conexion_bd = mysqli_connect("mysql1008.mochahost.com", "dawbdorg_1704340", "1704340", "dawbdorg_A01704340");
		if($conexion_bd == NULL)
			die("La base de datos dawbdorg_A01704340 está en mantenimiento, vuelve a intentarlo más tarde...");
		
		return $conexion_bd;
	}

	//desconectarse de la bd
	function desconectar_bd($conexion_bd)
	{
		mysqli_close($conexion_bd);
	}

	//consultar las entregas basado en consultas dinámicas
	function consultar_entregas($proyectos="", $proveedores="", $materiales="")
	{
		$conexion_bd = conectar_bd();

		$resultado = "<div class='table-responsive text-center miTabla table-wrapper-scroll-y my-custom-scrollbar'>";
		$resultado .= "<table id='tabla' class='table table-bordered table-hover table-dark'><thead><tr><th scope='col'>Fecha</th>";
		$resultado .= "<th scope='col'>Proyecto</th><th scope='col'>Proveedor</th><th scope='col'>Material</th><th scope='col'>Cantidad</th>";
		$resultado .= "<th scope='col'>Precio Individual</th><th scope='col'>Precio Total</th></tr></thead><tbody>";

		$consulta = 'SELECT E.Fecha as fecha, Y.Denominacion as proyecto, P.RazonSocial as proveedor, M.Descripcion as material, E.Cantidad as cantidad, M.Costo as costo_individual, E.Cantidad*M.Costo as costo_total ';
		$consulta .= ' FROM Entregan as E, Proyectos as Y, Proveedores as P, Materiales as M ';
		$consulta .= ' WHERE E.Clave = M.Clave AND E.Numero = Y.Numero AND E.RFC = P.RFC ';
		

		if($proyectos != "")
			$consulta .= ' AND E.Numero = '.$proyectos;
		
		if($proveedores != "")
			$consulta .= " AND E.RFC = '".$proveedores."'";
		
		if($materiales != "")
			$consulta .= ' AND E.Clave = '.$materiales;


		$consulta .= ' ORDER BY E.Fecha DESC ';

		$resultados = $conexion_bd->query($consulta);
		while ($row = mysqli_fetch_array($resultados, MYSQLI_BOTH))
		{
			$resultado .= "<tr>";
			$resultado .= "<td>".$row['fecha']."</td>";
			$resultado .= "<td>".$row['proyecto']."</td>";
			$resultado .= "<td>".$row['proveedor']."</td>";
			$resultado .= "<td>".$row['material']."</td>";
			$resultado .= "<td>".$row['cantidad']."</td>";
			$resultado .= "<td>$".$row['costo_individual']."</td>";
			$resultado .= "<td>$".$row['costo_total']."</td>";
			$resultado .= "<td><a class='btn btn-secondary' href='controlador_editar_entrega.php?fecha=".$row['fecha']."' role='button'>";
			$resultado .= "<span class='material-icons'>settings</span></a>";
			//esta fecha es para el id del modal de borrar
			$fechaModal = (new DateTime($row['fecha']))->format('Y-m-d');
			$proveedorModal =  str_replace(' ', '', $row['proyecto']);
			$resultado .= "<button type='button' class='btn btn-danger' data-toggle='modal' data-target='#".$proveedorModal.$fechaModal."'>";
			$resultado .= "<span class='material-icons'>remove_circle</span></button>";
			 include("partials/_modal.html");

			$resultado .= "</tr>";

		}

		mysqli_free_result($resultados);

		desconectar_bd($conexion_bd);
		$resultado .= "</tbody></table></div>";

		return $resultado;
	}


	//crear select dinámico
	function crear_select($llave, $descripcion, $tabla, $required, $seleccion = 0)
	{
		$conexion_bd = conectar_bd();
		$resultado = "<label  for='".$tabla."'>".$tabla."</label>";
		$resultado .= "<select class='form-control mx-auto col-lg-4' id='".$tabla."' name='".$tabla."' ";
		if($required)
		{
			$resultado .= "required";
		}
		$resultado .= "><option value='' disabled selected>Selecciona una opción</option>";

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
		$resultado .= "</select><br/>";
		return $resultado;
	}


	//agregar una entrega a la bd
	function agregar_entrega($clave, $rfc, $numero, $fecha, $cantidad)
	{
		$conexion_bd = conectar_bd();

		//preparar consulta
		$dml_insertar = 'INSERT INTO Entregan (Clave, RFC, Numero, Fecha, Cantidad) VALUES (?, ?, ?, ?, ?)';
		if(!($statement = $conexion_bd->prepare($dml_insertar)))
		{
			die("Error: (".$conexion_bd->errno.") ".$conexion_bd->error);
			return 0;
		}


		//unir parámetros de la función con la consulta
		//el primer arg es el formato de cada parámetro
		if(!$statement->bind_param("isisd", $clave, $rfc, $numero, $fecha, $cantidad))
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


	//modificar una entrega
	function editar_entrega($clave, $rfc, $numero, $fecha, $cantidad) {
		$conexion_bd = conectar_bd();
		  
		//Prepara la consulta
		$dml_editar = 'UPDATE Entregan SET Clave=(?), RFC=(?), Numero=(?), Cantidad=(?) WHERE Fecha=(?)';
		if ( !($statement = $conexion_bd->prepare($dml_editar)) ) {
			die("Error: (" . $conexion_bd->errno . ") " . $conexion_bd->error);
			return 0;
		}
		  
		//Unir los parámetros de la función con los parámetros de la consulta   
		//El primer argumento de bind_param es el formato de cada parámetro
		if (!$statement->bind_param("isids", $clave, $rfc, $numero, $cantidad, $fecha)) {
			die("Error en vinculación: (" . $statement->errno . ") " . $statement->error);
			return 0;
		}
		  
		//Executar la consulta
		if (!$statement->execute()) {
		  die("Error en ejecución: (" . $statement->errno . ") " . $statement->error);
			return 0;
		}
	
		desconectar_bd($conexion_bd);
		  return 1;
	  }
	
	  //Consultar un campo de entregan a partir de la fecha
	  function recuperar($fecha, $campo) {
		$conexion_bd = conectar_bd();  
		
		$consulta = "SELECT $campo FROM Entregan WHERE Fecha='$fecha'";
		$resultados = $conexion_bd->query($consulta);
		while ($row = mysqli_fetch_array($resultados, MYSQLI_BOTH)) {
			desconectar_bd($conexion_bd);
			return $row["$campo"];
		}
			
		desconectar_bd($conexion_bd);
		return 0;
	  }

	//Eliminar una entrega 
	function eliminar_entrega($clave, $rfc, $numero, $cantidad, $fecha)
	{
		$conexion_bd = conectar_bd();

		//Prepara la consulta
		$dml_eliminar = 'DELETE FROM Entregan WHERE Clave=(?) AND RFC=(?) AND Numero=(?) AND Cantidad=(?) AND Fecha=(?)';
		if ( !($statement = $conexion_bd->prepare($dml_eliminar)) ) {
			die("Error: (" . $conexion_bd->errno . ") " . $conexion_bd->error);
			return 0;
		}
		  
		//Unir los parámetros de la función con los parámetros de la consulta   
		//El primer argumento de bind_param es el formato de cada parámetro
		if (!$statement->bind_param("isids", $clave, $rfc, $numero, $cantidad, $fecha)) {
			die("Error en vinculación: (" . $statement->errno . ") " . $statement->error);
			return 0;
		}
		  
		//Executar la consulta
		if (!$statement->execute()) {
		  die("Error en ejecución: (" . $statement->errno . ") " . $statement->error);
			return 0;
		}

		desconectar_bd($conexion_bd);
		return 1;
	}


	//obtener todas los registros de un campo de una tabla
	function obtener_registros($tabla, $campo)
	{
		$conexion_bd = conectar_bd();  
		$array = "";
		$consulta = 'SELECT '.$campo.' FROM '.$tabla;
		$resultados = $conexion_bd->query($consulta);
		while ($row = mysqli_fetch_array($resultados, MYSQLI_BOTH)){
			$array .= ",".$row["$campo"];
		}
		mysqli_free_result($resultados);
		desconectar_bd($conexion_bd);
		$array = explode(",", $array);
		return $array;
	}

	function queryMaterial($descripcion, $costo)
	{
		$conexion_bd = conectar_bd();  
		$resultado = "<div class='table-responsive text-center miTabla table-wrapper-scroll-y my-custom-scrollbar'>";
		$resultado .= "<table class='table table-bordered table-hover table-dark'><thead><tr><th>Clave</th><th>Descripcion</th><th>Costo</th><th>Porcentaje Impuesto</th>";
		$consulta = 'CALL queryMaterial("'.$descripcion.'",'.$costo.')';
		$resultados = $conexion_bd->query($consulta);
		while ($row = mysqli_fetch_array($resultados, MYSQLI_BOTH)){
			$resultado .= "<tr>";

			$resultado .= "<td>".$row["Clave"]."</td>";
			$resultado .= "<td>".$row["Descripcion"]."</td>";
			$resultado .= "<td>".$row["Costo"]."</td>";
			$resultado .= "<td>".$row["PorcentajeImpuesto"]."</td>";

			$resultado .= "<tr>";
		}
		mysqli_free_result($resultados);
		desconectar_bd($conexion_bd);

		$resultado .= "</tbody></table></div>";

		return $resultado;
	}

	//agregar una material a la bd
	function creaMaterial($clave, $descripcion, $costo, $impuesto)
	{
		$conexion_bd = conectar_bd();

		//preparar consulta
		$dml_insertar = 'CALL creaMaterial(?,?,?,?)';
		if(!($statement = $conexion_bd->prepare($dml_insertar)))
		{
			die("Error: (".$conexion_bd->errno.") ".$conexion_bd->error);
			return 0;
		}


		//unir parámetros de la función con la consulta
		//el primer arg es el formato de cada parámetro
		if(!$statement->bind_param("isdd", $clave, $descripcion, $costo, $impuesto))
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