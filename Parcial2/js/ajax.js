function buscar(reset)
{
	console.log("buscando");
	$.post("controlador_buscarIncidente.php", {
		tiposBuscar: $("#tiposBuscar").val(),
		lugaresBuscar: $("#lugaresBuscar").val()
	}).done(function (data) {
		$("#resultados_consulta").html(data);
		if(reset)
		{
			$("#tiposBuscar").val("");
			$("#lugaresBuscar").val("");
			$('select').formSelect();
		}
	});
}

$("#buscar").click(function(){
	$("#tiposBuscar").val("");
	$("#lugaresBuscar").val("");
	buscar(true);
});

$("#tiposBuscar").change(function(){
	buscar(false);
});

$("#lugaresBuscar").change(function(){
	buscar(false);
});