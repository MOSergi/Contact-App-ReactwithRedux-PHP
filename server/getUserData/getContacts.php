<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    header('Access-Control-Allow-Credentials: true');

    require_once "../database/conection.php";

    session_start();

    if (isset($_SESSION["id_user"]) && $_SESSION["id_user"] != ""){

        $getContacts = $conn->prepare("SELECT nombre_contacto, descripcion_corta, correo, telefono FROM contacts WHERE id_contactos_usuario = :id_user");
        $getContacts->bindParam(":id_user", $_SESSION["id_user"]);
        $getContacts->execute();

        $resultadoContactos = [];

        while ($row = $getContacts->fetch(PDO::FETCH_ASSOC)){
            array_push($resultadoContactos, $row);
        }

        echo json_encode($resultadoContactos);

    } else {
        echo json_encode("No login");
    }

?>