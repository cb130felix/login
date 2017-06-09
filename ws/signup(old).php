<?php

include '../db/dbconfig.php';

$email = $_POST['email'];
$password = $_POST['password'];

$sql = "INSERT INTO users (email, password) VALUES ('$email', '$password')";

$result = mysqli_query($conn, $sql);

if($result >= 1){
	echo '{"op":"true"}';
}else{
	echo '{"op":"false"}';	
}
mysqli_close($conn);
