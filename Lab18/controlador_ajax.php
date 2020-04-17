<?php
	$pattern = htmlspecialchars(strtolower($_GET["pattern"]));
	$tabla = htmlspecialchars($_GET["tabla"]);
	$words = array("Distributed Applications", "AJAX", "Java Server Pages", "Web Services", "Data Bases", "JavaScript", "Networking", "PHP");
	$response = "";
	$size = 0;

	for($i = 0; $i < count($words); $i++)
	{
		$pos = stripos(strtolower($words[$i]), $pattern);
		if(!($pos === false))
		{
			$size++;
			$word = $words[$i];
			$response .= "<option value=\"$word\">$word</option>";
		}
	}

	if($size > 0)
		echo "<select class=' form-control col-md-4 mx-auto' id=\"list\" size=$size onclick=\"selectValue('$tabla')\">$response</select";
?>