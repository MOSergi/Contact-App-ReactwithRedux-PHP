<?php

    header('Access-Control-Allow-Origin: http://localhost:3000');
    header('Access-Control-Allow-Credentials: true');

    session_start();

    require_once "../database/conection.php";

    $newName = $_POST["newName"];

    if (isset($_SESSION["id_user"]) && $_SESSION["id_user"] != ""){
       
        $actualizarName = $conn->prepare("UPDATE usuarios SET nombre = :nombre WHERE id = :id");
        $actualizarName->bindParam(":nombre", $newName);
        $actualizarName->bindParam(":id", $_SESSION["id_user"]);
        $actualizarName->execute();

        echo json_encode("Valid auth");
    }

?>