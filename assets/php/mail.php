<?php

if(isset($_POST["submit"])) {
    $nom = $_POST['nom'];
    $prenom = $_POST['prenom'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $sujet = "Un message du portfolio";

    $mailto = "chatelainkevin9@gmail.com";
    $headers = "Mail de: ".$email;
    $txt = "Vous avez reçu un message de".$prenom." ".$nom."\n\n".$message;

    mail($mailto, $sujet, $txt, $headers);
    header("Location: ../../index.html");
}