<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = filter_input(INPUT_POST, "name", FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL);
    $message = filter_input(INPUT_POST, "message", FILTER_SANITIZE_STRING);

    if ($name && $email && $message) {
        $file = fopen("messages.txt", "a");
        fwrite($file, "Name: $name\nEmail: $email\nMessage: $message\n---\n");
        fclose($file);

        echo "Message sent successfully!";
    } else {
        echo "Invalid input!";
    }
}
?>