<?php

include '../db/dbconfig.php';

$token = $_POST['token'];

$sql = "UPDATE users SET token=NULL WHERE token='$token'";
$result = mysqli_query($conn, $sql);
$rows = mysqli_affected_rows($conn);

if($rows >= 1){
	echo '{"op":"true"}';
}else{
	echo '{"op":"false"}';
}
	
mysqli_close($conn);

