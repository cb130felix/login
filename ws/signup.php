<?php

include '../db/dbconfig.php';

$email = $_POST['email'];
$password = $_POST['password'];
$type = 1;

$hash = password_hash($password, PASSWORD_DEFAULT);

$sql = "INSERT INTO users (email, password, type) VALUES ('$email', '$hash', '$type')";

$result = mysqli_query($conn, $sql);

if($result >= 1){
	echo '{"op":"true"}';
}else{
	echo '{"op":"false"}';	
}
mysqli_close($conn);
