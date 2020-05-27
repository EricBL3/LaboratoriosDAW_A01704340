<?php
	function getData($path)
	{
		$url = "http://localhost/LaboratoriosDAW_A01704340/Lab25/acnh/".$path;
		$ch = curl_init($url);

		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_URL,$url);

		$res = curl_exec($ch);

		$data = json_decode($res, true);
		//var_dump($data);
		curl_close($ch);
		return $data;
	}


?>