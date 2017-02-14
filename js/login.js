var result;

$( document ).ready(function() {
	result = document.getElementById("result");
});

$( document ).ready(function() {
	
	$( "#button_login" ).click(function() {
			
		if(!isLogged()){	
			login();
		}else{
			result.innerHTML = "Already logged";
		}
		
	});

	
});
$( document ).ready(function() {
	
	$( "#button_logout" ).click(function() {
		if(isLogged()){
			logout();
		}else{
			result.innerHTML = "You're not logged. Login to logout. lololol";
		}
		
	});
	
});
	
$( document ).ready(function() {
	$( "#button_signup" ).click(function() {
		
		if(!isLogged()){
			signup();
		}else{
			result.innerHTML = "You're logged. Logout to signup";
		}
		 
	});
});

function signup(){

	var data = $('#form_signup').serialize();
	var webservice = "ws//signup.php";
	var parsed_response;
	
	$.post(webservice, 
		data, 
		function(response,status){
			if(status == "success"){
				if(localStorage.dev == "true"){alert("Status: " + status + " / data: " + data + " / response:" + response);} // DEBBUG
				result.innerHTML = "signing up...";
				parsed_response = JSON.parse(response);
				if(parsed_response.op == "true"){
					if(localStorage.dev == "true"){alert("Cadastro realizado");} // DEBBUG
					result.innerHTML = "Sing up completed";
				}else{
					if(localStorage.dev == "true"){alert("Cadastro não realizado");} // DEBBUG
					result.innerHTML = "Sign up was not completed";
				}
				
			}else{
				if(localStorage.dev == "true"){alert("Server not found");} // DEBBUG
				result.innerHTML = "Can't acess the server";
			}

		}
	);
	
	
}


function login(){

		var data = $('#form_login').serialize();
		var webservice = "ws//login.php";
		
		$.post(webservice, 
			data, 
			function (response,status){
				if(status == "success"){
					
					if(localStorage.dev == "true"){alert("Status: " + status + " / data: " + data + " / response:" + response);}
					var parsed_response = JSON.parse(response);

					if(parsed_response.token == "false"){
						result.innerHTML = "Couldn't login";
					}else{
						localStorage.setItem("token", parsed_response.token);
						result.innerHTML = "Logged in";
					}
				}else{
					if(localStorage.dev == "true"){alert("Server not found");}
					result.innerHTML = "Couldn't reach the server...";
				}
			}
		);
	
	
}


function logout(){
	
	
		var data = "token="+localStorage.token;
		var webservice = "ws//logout.php";
		
		$.post(webservice, 
			data, 
			function (response,status){
				if(status == "success"){
					if(localStorage.dev == "true"){alert("Status: " + status + " / data: " + data + " / response:" + response);} // DEBBUG
					var parsed_response = JSON.parse(response);
					if(parsed_response.op == "true"){
						if(localStorage.dev == "true"){alert("Logout realizado");} // DEBBUG
						localStorage.token = false;
						result.innerHTML = "Logged out";
					}else{
						if(localStorage.dev == "true"){alert("Logout não realizado!");} // DEBBUG
						result.innerHTML = "Couldn't logout";
					}
					
				}else{
					if(localStorage.dev == "true"){alert("Server not found");} // DEBBUG
					result.innerHTML = "Couldn't reach the server...";
				}
			}
		);
	
}


function isLogged(){
	
	if(localStorage.token == "false"){
		return false;
	}else{
		return true;
	}
	
}