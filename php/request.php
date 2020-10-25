<?php
  require_once 'resource.php';
  header('Content-type: text/html');
  header('Access-Control-Allow-Origin: *');
  $db = new DB();

  $req = $_REQUEST['command'];
  if ($req == "getResource") {
	$resource = $_REQUEST['resource'];
	$ret = $db->reqst($resource);
	echo $ret ;
  }

?>

