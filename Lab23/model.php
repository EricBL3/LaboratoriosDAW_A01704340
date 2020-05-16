<?php
	function getData($token, $url)
	{
		$ch = curl_init($url);

		$headr = array();
		$headr[] = "Accept: application/json";
		$headr[] = "Authorization: Bearer ".$token;
		
		curl_setopt($ch, CURLOPT_HTTPHEADER, $headr);
		curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
		
		$res = curl_exec($ch);
		$data = json_decode($res, true);
		curl_close($ch);

		return $data;
	}


?>