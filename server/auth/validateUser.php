<?php

    header('Access-Control-Allow-Origin: http://localhost:3000');
    header('Access-Control-Allow-Credentials: true');

    session_start();

    if (isset($_SESSION["id_user"]) && $_SESSION["id_user"] != ""){
        echo json_encode("LogedIn");
    } else {
        echo json_encode("No Login");
    }

?>