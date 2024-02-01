<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>
        <form method="post" action="gestione.php" enctype="multipart/form-data">
        <input type="text" placeholder="FirstName..." name="firstname">
        <input type="text" placeholder="LastName..." name="lastname">
        <input type="file" placeholder="Inserisci file" name="miofile">
        <button type="submit">Invia dati</button>
    </form>
    </div>

    <?php
session_start();
echo 'Variabile di sessione: ';
print_r($_SESSION['utente']);
session_write_close();
?>
</body>
</html>