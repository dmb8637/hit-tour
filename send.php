<?php
header('Content-Type: text/html; charset=utf-8');

$fio = $_POST['fio'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$booklink = $_POST['booklink'];

$fio = htmlspecialchars($fio);
$email = htmlspecialchars($email);
$phone = htmlspecialchars($phone);

$fio = urldecode($fio);
$email = urldecode($email);
$phone = urldecode($phone);

$fio = trim($fio);
$email = trim($email);
$phone = trim($phone);

$message = "ФИО:".$fio.". E-mail: ".$email." Тел: ".$phone." СПО:".$booklink ;

$success = mail("inbox@hit-tour.ru", 'заказ тура', $message, "From: inbox@hit-tour.ru \r\n");
if (!$success) {
    $errorMessage = error_get_last()['message'];
} 
    else {
    
        $errorMessage = "Заказ успешно отправлен!";
}

echo $fio;
echo "<br>";
echo $email;
echo "<br>";
echo $phone;
echo "<br>";
echo $booklink;
echo "<br>";
echo $errorMessage;

?>