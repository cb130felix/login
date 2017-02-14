	
$( document ).ready(function() {
	$( "#button_signup" ).click(function a() {
		
		var data = $('#form_signup').serialize();
		var webservice = "signup.php";
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
		
		 
	});
});
