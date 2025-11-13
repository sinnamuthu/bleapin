<?php
// Replace these with the values from your /blog/wp-config.php
$db_host = 'localhost';
$db_name = 'bleapblog';
$db_user = 'root';
$db_pass = 'Neeraj@Bleap#2021';

$conn = mysqli_connect($db_host, $db_user, $db_pass, $db_name);

if (!$conn) {
    die("❌ Connection failed: " . mysqli_connect_error());
}
echo "✅ Success! Connected to the blog database.";
?>