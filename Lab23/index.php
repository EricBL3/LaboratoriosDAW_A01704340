<?php
require_once("model.php");
//MY TAG - 8ULJ88YQ


$token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjcyYTUzMWFhLTg1ZjMtNDg4ZS04Mjc2LWEzZTJmMjFiNGQyOSIsImlhdCI6MTU4OTQyNjQ1Niwic3ViIjoiZGV2ZWxvcGVyLzU2MDgyODU0LTdlYjUtODU2Mi1iMWI5LTVhYzllYmExN2ViOCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE4OS4xMjguMjAuMTM0Il0sInR5cGUiOiJjbGllbnQifV19.ttmMGTZdUyQu7KMMPKFBGb_YF59jKB0QUYDsOgzICC1JMiDz_73O1Lg8tLMBerIAYvbncox3PI6W3lggnYgpfw";



//obtener info del clan
$clantag = "#2P2CJJ2CL";
$url = "https://api.clashofclans.com/v1/clans/" . urlencode($clantag);
$clanData = getData($token, $url);

//obtener info de liga del clan
$url = "https://api.clashofclans.com/v1/leagues/".((int)$clanData["warLeague"]["id"]-19000000);
$warLeagueData = getData($token, $url);
if (isset($clanData["reason"])) {
  $errormsg = true;
}
if (isset($errormsg)) {
  echo "<p>", "Failed: ", $clanData["reason"], " : ", isset($clanData["message"]) ? $clanData["message"] : "", "</p></body></html>";
  exit;
}

if (isset($warLeagueData["reason"])) {
  $errormsg = true;
}
if (isset($errormsg)) {
  echo "<p>", "Failed: ", $warLeagueData["reason"], " : ", isset($warLeagueData["message"]) ? $warLeagueData["message"] : "", "</p></body></html>";
  exit;
}

$members = $clanData["memberList"];
$labels = $clanData["labels"];


include("_header.html");
include("partials/_nav.html");
include("partials/tabla.html");

include("partials/_preguntas.html");

include("partials/_referencias.html");

include("_footer.html");


?>