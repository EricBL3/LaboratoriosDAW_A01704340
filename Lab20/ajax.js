

function sendRequest(tabla)
{
	$userInput = $("#userInput"+tabla);
	$ajaxResponse = $("#ajaxResponse"+tabla);

	$.get("controlador_ajax.php",{
		Tabla: tabla,
		pattern: $userInput.val()
	}).done(function (data) {
		
		$ajaxResponse.html(data);
		$ajaxResponse.css("visibility","visible");
	});
}

function selectValue(tabla)
{	
	let list = document.getElementById("list");
	let userInput = document.getElementById("userInput"+tabla);
	let input = document.getElementById(tabla);
	let ajaxResponse = document.getElementById("ajaxResponse"+tabla);
	userInput.value = list.options[list.selectedIndex].text;
	input.value = list.options[list.selectedIndex].value;
	ajaxResponse.style.visibility = "hidden";
	$("#ajaxResponse"+tabla).empty();
	userInput.focus();
	buscar(false);
}
function buscar(reset)
{
	$.post("controlador_buscar.php", {
		Proyectos: $("#Proyectos").val(),
		Proveedores: $("#Proveedores").val(),
		Materiales: $("#Materiales").val()
	}).done(function (data) {
		$("#resultados_consulta").html(data);
		if(reset)
		{
			$("#Proyectos").val("");
			$("#userInputProyectos").val("");
			$("#Proveedores").val("");
			$("#Materiales").val("");
		}
	});
}

$("#buscar").click(function(){
	$("#Proyectos").val("");
	$("#userInputProyectos").val("");
	$("#Proveedores").val("");
	$("#Materiales").val("");
	buscar(true);
});
$("#Proveedores").change(function(){
	buscar(false);
});
$("#Materiales").change(function(){
	buscar(false);
});





