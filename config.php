<?php
    session_start();
    define("ROOT_PATH", realpath(dirname(__FILE__)));

    $env = parse_ini_file('.env');

    // mysqli_connect(host, username, password, dbname, port, socket)
    $conn = mysqli_connect("localhost", $env["DB_USER"], $env["DB_PASS"], $env["DB_NAME"]);
    if (!$conn) {
        die("Error connecting to the database" . mysqli_connect_error());
    }
?>

