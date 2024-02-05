<?php

$obj = new stdClass();
$obj->name = 'Mario';
$obj->lastname = 'Rossi';
$obj->city = 'San Francisco';

$arr = ['name' => 'Mario', 'lastname' => 'Rossi', 'city' => 'San Francisco'];

$str = 'Mario Rossi';
function func(&$param)    // & tratta il parametro come riferimento e non come valore
{
    /*  $param->name = 'John'; */// Modifico il valore di un oggetto
    $param['name'] = 'John';     // Modifico il valore di un array
    //$param = 'John Rossi';
    var_dump($param);
}

/* func($obj); */// Richiamo la funzione e come parametro gli passo un oggetto
func($arr);        // Richiamo la funzione e come parametro gli passo un array
//func($str);         // Richiamo la funzione e come parametro gli passo una stringa
echo '<br/>';
/* var_dump($obj); */
var_dump($arr);
//var_dump($str);

/* function func2(?int $param1, ?int $param2): string
{
    #code...
    return '';
}

$res = func2();
var_dump($res); */

//Funzioni predefinite per String
// https://www.php.net/manual/en/ref.strings.php

$name = 'Mario Rossi';
echo strtoupper($name);
echo strtolower($name);
echo strlen($str);   // Restituisce la lunghezza di una stringa
echo trim($name);
echo strpos($name, 'r');
print_r(explode(' ', $name));
echo join('', ['c', 'i', 'a', 'o']);

// Funzioni predefinite per Array
// https: //www.php.net/manual/en/ref.array.php

$arr = ['uno', 'due', 'tre'];
/* $arr[] = 'nuovo'; */
array_push($arr, 'nuovo');
array_pop($arr);
array_shift($arr);
array_unshift($arr, 'primo');
array_splice($arr, 1);        // Elimina un elemento dalla posizione 1 fino alla fine
array_splice($arr, 1, 2);    // Elimina un elemento dalla posizione 1 fino alla posizione 2
array_splice($arr, 1, 1, 'altro');     // Elimina un elemento nella posizione 1 e lo sostituisce con un nuovo valore
count($arr);  // Mi restituisce la lunghezza di un array
sort($arr);   // Ordina un array
array_search('tre', $arr);   // Mi restituisce l'indice del valore
array_reverse($arr);         // Inverte i valori dell'array
array_walk($arr, fn(&$e) => $e = strtoupper($e));    // Applica una callback ad ogni elemento del nostro array
$newArr = array_map(fn($e) => $e . '!!!', $arr);               // Applica una callback ad ogni elemento del nostro array e ritorna uno nuovo
$filterArr = array_filter($arr, fn($e) => strlen($e) > 3);   // Applica una callback ad ogni elemento del nostro array e ritorna uno nuovo filtrato
$reduceVal = array_reduce($arr, fn($acc, $val) => $acc . '-' . $val);   // Applica una callback ad ogni elemento del nostro array e ritorna un solo valore

// Funzioni predefinite per Date
// https: //www.php.net/manual/en/function.date.php


// Funzioni predefinite per Math
// https://www.php.net/manual/en/ref.math.php

$num1 = rand(1, 23);
$num2 = rand(1, 23);
$num3 = $num1 / $num2;
echo '<p>' . $num3 . '</p>';
echo '<p>' . ceil($num3) . '</p>';
echo '<p>' . floor($num3) . '</p>';
echo '<p>' . round($num3) . '</p>';
echo '<p>' . abs($num3) . '</p>';
?>


<?php
// Validazione di dati con PHP

# filter_var(Sanitize) => funzione predefinita in PHP per la validazione dei dati
# Convalida e pulisce da codice HTML inviato una variabile
$str = '<h1>Ciao a tutti</h1>';
// $strSanitize = filter_var($str, FILTER_SANITIZE_STRING);  // Deprecato
$strSanitize = htmlspecialchars($str);
// echo $strSanitize;


# filter_var(Validate) => funzione predefinita in PHP per la validazione dei dati
# Valida il tipo di valore di una variabile
# FILTER_VALIDATE_INT
# FILTER_VALIDATE_BOOLEAN
# FILTER_VALIDATE_IP
# FILTER_VALIDATE_DOMAIN
# FILTER_VALIDATE_EMAIL
# FILTER_VALIDATE_URL
# FILTER_VALIDATE_FLOAT

$num = 25;
if (filter_var($num, FILTER_VALIDATE_INT)) {
    echo "<br/>$num è un valore intero";
} else {
    echo "$num non è un valore intero";
}

$email = 'example@example.com';
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "<br/>$email è un valore valido";
} else {
    echo "<br/>$email non è un valore valido";
}

$url = 'http://example.com';
if (filter_var($url, FILTER_VALIDATE_URL)) {
    echo "<br/>$url è un valore valido";
} else {
    echo "<br/>$url non è un valore valido";
}

// Inviare un'email tramite mail() funzione predefinita di PHP

$to = 'example@example.com';  // Indirizzo mail del destinatario
$subject = 'Invio email di test';  // Oggetto della mail
$message = 'Questa è una email inviata dal server';  // Corpo dell'email
$additional_header = 'From: no-reply@example.com, Reply-to: webmaster@example.com';    // Headers addizionali opzionali
$additional_params = '';    // Ulteriori parametri opzionali

mail($to, $subject, $message, $additional_header);

?>