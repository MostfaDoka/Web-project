<?php
session_start();

$correct_user = "admin";
$hashed_pass = password_hash("1234", PASSWORD_DEFAULT);

$username = $_POST['username'];
$password = $_POST['password'];

if ($username === $correct_user && password_verify($password, $hashed_pass)) {
    $_SESSION['user'] = $username;
    header("Location: dashboard.php");
} else {
    echo "Wrong data";
}
?>