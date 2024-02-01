<?php
session_start();  // leggo o inizializzo una sessione sul browser del client
echo 'Variabile di sessione: ' . $_SESSION['user'] = 'Mario Rossi';
session_write_close();
?>