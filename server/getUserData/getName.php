<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    header('Access-Control-Allow-Credentials: true');

    require_once "../database/conection.php";

    session_start();

    $username = $conn->prepare("SELECT nombre FROM usuarios WHERE id = :id");
    $username->bindParam(":id", $_SESSION["id_user"]);
    $username->execute();
    $resultadoName = $username->fetch(PDO::FETCH_ASSOC);

    if ($resultadoName != false){
        if ($resultadoName["nombre"] != ""){
            echo json_encode($resultadoName["nombre"]);
        }
    } else {
        echo json_encode("No login");
    }


?>