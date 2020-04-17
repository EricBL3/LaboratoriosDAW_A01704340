<?php 
  session_start();
  require_once("model.php");  

  $fecha = htmlspecialchars($_GET["fecha"]);

  include("_header.html");

  $clave = recuperar($fecha, "Clave");
  $rfc = recuperar($fecha, "RFC");
  $numero = recuperar($fecha, "Numero");
  $cantidad = recuperar($fecha, "Cantidad");
  $editar = 1;
  include("partials/_form_entrega.html"); 

  include("_footer.html"); 
?>