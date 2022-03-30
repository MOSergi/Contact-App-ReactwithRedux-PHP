<?php
    
    header('Access-Control-Allow-Origin: http://localhost:3000');
    header('Access-Control-Allow-Credentials: true');

    require_once "../database/conection.php";

    session_start();

    $email = $_POST["email"];
    $password = $_POST["password"];

    $validateUser = $conn->prepare("SELECT password, id FROM usuarios WHERE email = :correo");
    $validateUser->bindParam(":correo", $email);
    $validateUser->execute();
    $resultadoEmail = $validateUser->fetch(PDO::FETCH_ASSOC);

    if ($resultadoEmail == false){
        echo json_encode("No data found");
    } else {
        if (password_verify($password, $resultadoEmail["password"])){
            $_SESSION["id_user"] = $resultadoEmail["id"];
            $_SESSION["user_email"] = $email;
            echo json_encode("Valid Password");
        } else {
            echo json_encode("Wrong username or password");
        }
    }

?>