<?php
session_start();

if (!isset($_SESSION['user'])) {
    header("Location: login.html");
    exit();
}
?>

<h1>Welcome Admin</h1>
<a href="logout.php">Logout</a>