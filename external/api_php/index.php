<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Max-Age: 1000');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

require "conectar.php";

$date = !empty($_GET['date']) ? $_GET['date'] : '22/03/2019';
$limit = !empty($_GET['limit']) ? $_GET['limit'] : '20';
$query = "SELECT * FROM datos_nuevos WHERE FechaEst = '$date' ORDER BY localidad, NroBoleta LIMIT $limit";

$result = mysql_query($query);
$data = array();

while($row = mysql_fetch_assoc($result)){
	$data[] = $row;
}

echo json_encode($data);
?>