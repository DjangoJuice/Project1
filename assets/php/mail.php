<html>
<head><title>PHP Mail Sender</title></head>
<body>
<?php

echo "Hello World!";

/* All form fields are automatically passed to the PHP script through the array $HTTP_POST_VARS. */
$name = $HTTP_POST_VARS['name'];
$email = $HTTP_POST_VARS['email'];
$subject = 'Discount Concert Coupon';
$message = 'Dear ';

echo "<h2>Name =  $name , Email = $email , Subject = $subject , Message = $message";

?>
</body>
</html>