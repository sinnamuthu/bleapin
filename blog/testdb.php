<?php
$link = mysqli_connect('localhost', 'DB_USER', 'DB_PASSWORD', 'DB_NAME');
if (!$link) {
    die('Connection failed: ' . mysqli_connect_error());
}
echo 'Database connection successful!';
?>
