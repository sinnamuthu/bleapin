<?php
define('_DEFVAR', 1);
defined('_DEFVAR') or exit('Restricted Access');
date_default_timezone_set('America/New_York');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require __DIR__ .'/PHPMailer/src/Exception.php';
require __DIR__ .'/PHPMailer/src/PHPMailer.php';
require __DIR__ .'/PHPMailer/src/SMTP.php';
// Function to get the client IP address
function get_client_ip() {
    $ipaddress = '';
    if (getenv('HTTP_CLIENT_IP'))
        $ipaddress = getenv('HTTP_CLIENT_IP');
    else if(getenv('HTTP_X_FORWARDED_FOR'))
        $ipaddress = getenv('HTTP_X_FORWARDED_FOR');
    else if(getenv('HTTP_X_FORWARDED'))
        $ipaddress = getenv('HTTP_X_FORWARDED');
    else if(getenv('HTTP_FORWARDED_FOR'))
        $ipaddress = getenv('HTTP_FORWARDED_FOR');
    else if(getenv('HTTP_FORWARDED'))
       $ipaddress = getenv('HTTP_FORWARDED');
    else if(getenv('REMOTE_ADDR'))
        $ipaddress = getenv('REMOTE_ADDR');
    else
        $ipaddress = 'UNKNOWN';
    return $ipaddress;
}
if(!empty($_POST))
{
	//echo '<pre>'; print_r($_POST); exit;
	$server = "182.50.133.86";
	$user = "getmrhome_Dev";
	$pass = "DBA.getMRhome@2020";
	$dbname = "getmrhome"; 
	//Creating connection for mysqli 
	$conn = new mysqli($server, $user, $pass, $dbname); 
	//Checking connection 
	if($conn->connect_error){
	 die("Connection failed:" . $conn->connect_error);
	} 
	$first_name 			= mysqli_real_escape_string($conn, $_POST['first_name']);
	$mobile_number  		= mysqli_real_escape_string($conn, $_POST['mobile_number']);
	$provider_name			= mysqli_real_escape_string($conn, $_POST['provider_name']);
	$wireless_provider_name	= mysqli_real_escape_string($conn, $_POST['wireless_provider_name']);
	$state_name			    = mysqli_real_escape_string($conn, $_POST['state_name']);
	$zip_code				= mysqli_real_escape_string($conn, $_POST['zip_code']);
	$consent				= isset($_POST['invalidCheck']) ? mysqli_real_escape_string($conn, $_POST['invalidCheck']) : 0;
	$ip_address				= get_client_ip();
	$date					= date('Y-m-d H:i:s');
	
	
	$sql = "INSERT INTO enquiries (name, contact_number, tv_provider, wireless_provider, state, zipcode, created_date_time, ip_address, consent) VALUES ('".$first_name."', '".$mobile_number."','".$provider_name."','".$wireless_provider_name."','".$state_name."','".$zip_code."','".$date."','".$ip_address."','".$consent."')";
	 
	if($conn->query($sql) === TRUE){
		$mail = new PHPMailer(true);
		try 
		{
			//Server settings
			//$mail->SMTPDebug = SMTP::DEBUG_SERVER;                      // Enable verbose debug output
			$mail->isSMTP();                                            // Send using SMTP
			$mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
			$mail->SMTPAuth   = true;                                   // Enable SMTP authentication
			$mail->Username   = 'getmrhome@gmail.com';                     // SMTP username
			$mail->Password   = 'getmrhome@123';                               // SMTP password
			$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
			$mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

			//Recipients
			$mail->setFrom('getmrhome@gmail.com', 'GetMrHome');
			$mail->addAddress('salemaster20@gmail.com', 'GetMrHomeAdmin');     // Add a recipient
			/* $mail->addAddress('ellen@example.com');               // Name is optional
			$mail->addReplyTo('info@example.com', 'Information');
			$mail->addCC('cc@example.com');
			$mail->addBCC('bcc@example.com');*/
			// Content
			$message = '<table width="100%" border = "1" cellpadding = "5" cellspacing = "5">
							<thead>
								<tr>
									<th>Name</th>
									<th>Contact Number</th>
									<th>Current Provider Name</th>
									<th>Wireless Provider</th>
									<th>State</th>
									<th>Zipcode</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>'.$_POST['first_name'].'</td>
									<td>'.$_POST['mobile_number'].'</td>
									<td>'.$_POST['provider_name'].'</td>
									<td>'.$_POST['wireless_provider_name'].'</td>
									<td>'.$_POST['state_name'].'</td>
									<td>'.$_POST['zip_code'].'</td>
								</tr>
							</tbody>
						</table>';
			$mail->isHTML(true);                                  // Set email format to HTML
			$mail->Subject = 'New order from GetMrHome';
			$mail->Body    = $message;
			//$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
			$mail->send();
			echo "Your order has been submitted sucessfully. We will get back to you soon.";
		} catch (Exception $e) {
			echo "Your order has been submitted sucessfully. We will get back to you soon.";
			//echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
		}		
	}
	else
	{
		echo "Error" . $sql . "<br/>" . $conn->error;
	}
	$conn->close();
}
?>