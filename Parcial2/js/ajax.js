function buscar()
{
	console.log("buscando");
	$.post("controlador_buscarIncidente.php", {
		tiposBuscar: $("#tiposBuscar").val(),
		lugaresBuscar: $("#lugaresBuscar").val()
	}).done(function (data) {
		$("#resultados_consulta").html(data);
	});
}

$("#tiposBuscar").change(function(){
	buscar();
});

$("#lugaresBuscar").change(function(){
	buscar();
});