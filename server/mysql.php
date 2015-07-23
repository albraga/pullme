<?php

function getConnection() {
    $conn = null;
    try {
        $user = "root";
        $pass = "root";
        $conn = new PDO('mysql:host=localhost;dbname=pullme', $user, $pass);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    } catch(PDOException $e) {
        echo 'ERROR: ' . $e->getMessage();
    }
    return $conn;
}

function getProdutos() {
    $sql_query = "select name FROM product";
    try {
        $dbCon = getConnection();
        $stmt   = $dbCon->query($sql_query);
        $produtos  = $stmt->fetchAll(PDO::FETCH_OBJ);
        $dbCon = null;
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
    return $produtos;
}