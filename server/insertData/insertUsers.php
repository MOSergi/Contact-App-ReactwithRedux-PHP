<?php

    header('Access-Control-Allow-Origin: http://localhost:3000');

    require_once "../database/conection.php";

    $name = $_POST["name"];
    $email = $_POST["email"];
    $password = $_POST["password"];

    $passwordHash = password_hash($password, PASSWORD_BCRYPT);

    $validEmail = $conn->prepare("SELECT nombre FROM usuarios WHERE email = :correo");
    $validEmail->bindParam(":correo", $email);
    $validEmail->execute();
    $resultadoEmail = $validEmail->fetch(PDO::FETCH_ASSOC);

    if ($resultadoEmail == false){
        $insertUser = $conn->prepare("INSERT INTO usuarios (nombre, password, email) VALUES (:nombre, :password, :email)");
        $insertUser->bindParam(":nombre", $name);
        $insertUser->bindParam(":password", $passwordHash);
        $insertUser->bindParam(":email", $email);
        $insertUser->execute();
        echo json_encode("Registered Sucessfully");

    } else {
        echo json_encode("Invalid Email");
    }


?>