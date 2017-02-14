<?php

$server = "localhost";
$user = "root";
$password = "";
$dbName = "logintest";

$conn = mysqli_connect($server, $user, $password, $dbName);

if(!$conn){
	die("connection failld: " . mysqli_connect_error);
}else{
	//echo "Connectado...";
}