<?php

$foto = $_POST['img_val'];

$image = explode('base64,',$foto); 
$file_suffix = time();

file_put_contents('img/usr/imagen_'.$file_suffix.'.png', base64_decode($image[1]));

?>