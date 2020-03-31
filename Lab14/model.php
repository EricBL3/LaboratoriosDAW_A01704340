<?php
	function conectar_bd()
	{
		$conexion_bd = mysqli_connect("localhost", "root", "", "Lab14");
		if($conexion_bd == NULL)
			die("La base de datos Lab14 está en mantenimiento, vuelve a intentarlo más tarde...");
		
		return $conexion_bd;
	}

	function desconectar_bd($conexion_bd)
	{
		mysqli_close($conexion_bd);
	}

	function consultar_entregas($proyectos="", $proveedores="", $materiales="")
	{
		$conexion_bd = conectar_bd();

		$resultado = "<div class='table-responsive text-center miTabla table-wrapper-scroll-y my-custom-scrollbar'><table id='tabla' class='table table-bordered table-hover table-dark'><thead><tr><th scope='col'>Fecha</th>";
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


		$consulta .= ' ORDER BY E.Fecha ';

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
			$resultado .= "</tr>";

		}

		mysqli_free_result($resultados);

		desconectar_bd($conexion_bd);
		$resultado .= "</tbody></table></div>";

		return $resultado;
	}

	function crear_select($llave, $descripcion, $tabla)
	{
		$conexion_bd = conectar_bd();
		$resultado = "<label for='".$tabla."'>".$tabla."</label><select class='form-control' id='".$tabla."' name='".$tabla."'><option value='' disabled selected>Selecciona una opción</option>";

		$consulta = "SELECT $llave, $descripcion FROM $tabla";
		$resultados = $conexion_bd->query($consulta);
		while($row = mysqli_fetch_array($resultados, MYSQLI_BOTH))
		{
			$resultado .= "<option value='".$row["$llave"]."'>".$row["$descripcion"]."</option>";
		}

		desconectar_bd($conexion_bd);
		$resultado .= "</select>";
		return $resultado;
	}

?>