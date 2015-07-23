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

function getStores() {
    $sql_query = "select * FROM store";
    try {
        $dbCon = getConnection();
        $stmt   = $dbCon->query($sql_query);
        $stores  = $stmt->fetchAll(PDO::FETCH_OBJ);
        $dbCon = null;
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
    return $stores;
}