function nextDatosIngreso(){
		document.getElementById("datosIngreso").style.display = "block";
		document.getElementById("datosPersonales").style.display = "none";
		document.getElementById("progressBar").style.width = "25%";
}

function nextDatosFam(){
		document.getElementById("datosIngreso").style.display = "none";
		document.getElementById("datosFamiliares").style.display = "block";
		document.getElementById("progressBar").style.width = "50%";
}

function nextArchivos(){
		document.getElementById("archivosVarios").style.display = "block";
		document.getElementById("datosFamiliares").style.display = "none";
		document.getElementById("progressBar").style.width = "75%";
}

function submitBeneficiarias(){
		document.getElementById("archivosVarios").style.display = "none";
		document.getElementById("registroExitoso").style.display = "block";
		document.getElementById("progressBar").style.width = "100%";
}

function prevDatosIngreso(){
		document.getElementById("datosIngreso").style.display = "none";
		document.getElementById("datosPersonales").style.display = "block";
		document.getElementById("progressBar").style.width = "0%";
}

function prevDatosFam(){
		document.getElementById("datosIngreso").style.display = "block";
		document.getElementById("datosFamiliares").style.display = "none";
		document.getElementById("progressBar").style.width = "25%";
}

function prevArchivos(){
		document.getElementById("archivosVarios").style.display = "none";
		document.getElementById("datosFamiliares").style.display = "block";
		document.getElementById("progressBar").style.width = "50%";
}