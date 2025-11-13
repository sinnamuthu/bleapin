<?php
header("Access-Control-Allow-Origin: *");
header('Content-type: application/json');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once 'PHPMailer/src/Exception.php';
require_once 'PHPMailer/src/PHPMailer.php';
require_once 'PHPMailer/src/SMTP.php';

$mail = new PHPMailer(true);

$mail->SMTPDebug = 0;   

$mail->isSMTP();   

$mail->Host = "smtp.gmail.com";

$mail->SMTPAuth = true;                        

$mail->Username = "kathiresan.bleap@gmail.com";             
$mail->Password = "kathir@123";                       

$mail->SMTPSecure = "tls"; 
	
$mail->Port = 587;  


$type			= @$_POST["type"];
$cusname		= @$_POST["cusname"];
$txtphone		= @$_POST["txtphone"];
$txtemail		= @$_POST["txtemail"];
$txtcity		= @$_POST["txtcity"];
$txtmodel		= @$_POST["txtmodel"];


$mail->From = "info@sundarammercedescoimbatore.com";
$mail->FromName = "Volkswagon Mount road sundaram motors";
$mail->addAddress("karthiksreenivas@sundarammotors.com", "karthiksreenivas@sundarammotors.com");
$mail->addCC('vishnu@bleap.in');
$mail->isHTML(true);
$mail->Subject = "Enquire - Volkswagon Mount road sundaram motors";

$mail->Body = "<p><b>Dear ".$cusname."</b></p> <p>Thank you for your interest in our product or service.</p><br><table border='1' cellpadding='5' cellspacing='0' width='100%'><tr><td><b>Name</b></td><td>".$cusname."</td></tr><tr><td><b>Phone Number</b></td><td>".$txtphone."</td></tr><tr><td><b>Email</b></td><td>".$txtemail."</td></tr><tr><td><b>City</b></td><td>".$txtcity."</td></tr><tr><td><b>Model</b></td><td>".$txtmodel."</td></tr></table><br><p>We kook forward to hear from you soon.</b></p><p><b>Regards,<br>Volkswagen Mount Road Sundaram Motors.</b></p>";
				
$mail->send();


$data = array("success" => 1);

echo json_encode( $data );

?>