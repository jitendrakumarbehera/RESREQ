<?php 
	header("Access-Control-Allow-Origin: *");
	header("Content-Type: application/json; charset=UTF-8");
 //  The following line, in our PHP examples, has been added to allow cross-site access.
	$data =[]; //create a  empty array
	$data['data'] =
		array( "page"=>1,"per_page"=>3,"total"=>12,"total_pages"=>4,"data" =>[
					array("id"=>1,"first_name"=>"George","last_name"=>"Bluth","avatar"=>"https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"),
					array("id"=>2,"first_name"=>"Janet","last_name"=>"Weaver","avatar"=>"https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"),
					array("id"=>3,"first_name"=>"Emma","last_name"=>"Wong","avatar"=>"https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg")
			 	]
		);
    //add a value in array name data  
	 echo json_encode($data['data']);//it change the data to json object
	 

?>
