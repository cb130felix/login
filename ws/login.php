<?php

include '../db/dbconfig.php';

$email = $_POST['email'];
$password = $_POST['password'];


$sql = "select * from users where email='$email'";
$result = mysqli_query($conn, $sql);
$row = mysqli_fetch_assoc($result);
$hash_password = $row['password'];

$hash = password_verify($password, $hash_password);

if($hash == 0){
	echo '{"login":"false", "token":"false"}';
}else{
	$token = md5(uniqid($email,true));	
	$sql_update = "UPDATE users SET token='$token' WHERE email='$email'";
	if (mysqli_query($conn, $sql_update)) {
		echo '{"login":"true", "token":"'.$token.'"}';
	} else {
		//echo "Error updating record: " . mysqli_error($conn);
		echo '{"login":"false", "token":"false"}';
	}
}
/*
if(!$row = mysqli_fetch_assoc($result)){
	//echo "Email or password incorrect!";
	echo '{"login":"false", "token":"false"}';
}else{
	$token = md5(uniqid($email,true));	
	$sql_update = "UPDATE users SET token='$token' WHERE email='$email'";
	if (mysqli_query($conn, $sql_update)) {
		echo '{"login":"true", "token":"'.$token.'"}';
	} else {
		//echo "Error updating record: " . mysqli_error($conn);
		echo '{"login":"false", "token":"false"}';
	}

}
*/	
	
mysqli_close($conn);

