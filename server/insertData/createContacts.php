<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    header('Access-Control-Allow-Credentials: true');

    require_once "../database/conection.php";

    session_start();

    $nombre = $_POST["nombre"];
    $descripcion = $_POST["desc"];
    $correo = $_POST["correo"];
    $phone = $_POST["tel"];

    if (isset($_SESSION["id_user"]) && $_SESSION["id_user"] != ""){

        $createContact = $conn->prepare("INSERT INTO contacts (nombre_contacto, descripcion_corta, correo, id_contactos_usuario, telefono) VALUES (:name, :desc, :email, :id_user, :phone)");
        $createContact->bindParam(":name", $nombre);
        $createContact->bindParam(":desc", $descripcion);
        $createContact->bindParam(":email", $correo);
        $createContact->bindParam(":id_user", $_SESSION["id_user"]);
        $createContact->bindParam(":phone", $phone);
        $createContact->execute();

        echo json_encode("Contact created");

    }

?>