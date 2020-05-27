<?php
require_once("model.php");

//obtener info de villagers

$villagers = getData("villagers");
$specialCharacters = getData("specialcharacters");

include("_header.html");

include("partials/_nav.html");
include("partials/tabla.html");

include("partials/_preguntas.html");

include("partials/_referencias.html");

include("_footer.html");


?>