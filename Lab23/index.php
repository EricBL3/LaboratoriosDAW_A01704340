<?php
//MY TAG - 8ULJ88YQ
$clantag = "#2P2CJJ2CL";

$token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjcyYTUzMWFhLTg1ZjMtNDg4ZS04Mjc2LWEzZTJmMjFiNGQyOSIsImlhdCI6MTU4OTQyNjQ1Niwic3ViIjoiZGV2ZWxvcGVyLzU2MDgyODU0LTdlYjUtODU2Mi1iMWI5LTVhYzllYmExN2ViOCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE4OS4xMjguMjAuMTM0Il0sInR5cGUiOiJjbGllbnQifV19.ttmMGTZdUyQu7KMMPKFBGb_YF59jKB0QUYDsOgzICC1JMiDz_73O1Lg8tLMBerIAYvbncox3PI6W3lggnYgpfw";

$url = "https://api.clashofclans.com/v1/clans/" . urlencode($clantag);
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
//var_dump($data);
if (isset($data["reason"])) {
  $errormsg = true;
}

$members = $data["memberList"];

if (isset($errormsg)) {
  echo "<p>", "Failed: ", $data["reason"], " : ", isset($data["message"]) ? $data["message"] : "", "</p></body></html>";
  exit;
}

include("_header.html");

include("partials/_nav.html");
include("partials/tabla.html");

include("partials/_preguntas.html");

include("partials/_referencias.html");

include("_footer.html");


?>