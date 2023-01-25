<?php /* Simon: Clean Me: Unless this is used delete it */
error_reporting(0);
//1. Database Connection
	
//Godaddy Database Details
	$dbhost = 'localhost';
	$dbuser = 'CompanyAccess';
	$dbpass = 'Paranoia13$';
	$dbname = 'Company';

	$db = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
//Test Connection
	if(mysqli_connect_errno()) {
		die('Problem (database-connection), redirect to error form here: ' .
				mysqli_connect_error() .
      ' (' . mysqli_connect_errno() . ')'
		);
	}
