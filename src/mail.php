<?php

$inputJSON = file_get_contents('php://input');
$input= json_decode( $inputJSON, true );
$base = $input['img'];
// print_r($inputJSON);
// print_r('test');
// print_r($base);
// print_r('test');


// несколько получателей
$to = 'belousovmm@plastika-okon.ru, bjworld@gmail.com'; // обратите внимание на запятую

// тема письма
$subject = 'Новый сотрудник Пластики Окон';

// текст письма
$message = '
<html>
<head>
</head>
<body>
<img src="'.$base.'" width="980">
</body>
</html>
';

// Для отправки HTML-письма должен быть установлен заголовок Content-type
// $headers  = 'MIME-Version: 1.0' . "\r\n";
// $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

// Дополнительные заголовки
// $headers[] = 'To: Mary <mary@example.com>, Kelly <kelly@example.com>';
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-type: text/html; charset=utf-8';
$headers[] = 'From: Пластика Окон <no-reply@plastika-okon.ru>';
$headers[] = 'Reply-To: no-reply@plastika-okon.ru';
$headers[] = 'X-Mailer: PHP/' . phpversion();
// $headers[] = 'Cc: birthdayarchive@example.com';
// $headers[] = 'Bcc: birthdaycheck@example.com';

// Отправляем
if (!empty($base)) {
  $success = mail($to, $subject, $message, implode("\r\n", $headers));
  if (!$success) {
    $errorMessage = error_get_last()['message'];
    return $errorMessage;
  } else {
    return 'done';
  }
}

?>