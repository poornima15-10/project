<?php
$host = "host=localhost";
$port = "port=8080";
$dbname = "dbname=mtestdb";
$credentials = "user=root password=root";
try {
    $con = pg_connect("$host $port $dbname $credentials");
    if (!$con) {
        throw new Exception("Database Connection Error");
    }
}
catch(Exception $e) {
    echo "caught exception", $e->getMessage(), "\n";
    die();
}
?>