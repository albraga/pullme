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

function getStores($productName, $latA, $lonA, $maxDistance) {
    $sql_query =
"SELECT * FROM store s INNER JOIN store_product sp ON s.store_name = sp.store_name WHERE sp.product_name = :productName AND sp.ispromo = true AND DEGREES(ACOS(COS(RADIANS(:latA)) * COS(RADIANS(s.lat)) *
             COS(RADIANS(:lonA) - RADIANS(s.lon)) +
             SIN(RADIANS(:latA)) * SIN(RADIANS(s.lat)))) * 111.045 <= :maxDistance";
    try {
        $dbCon = getConnection();
        $stmt   = $dbCon->prepare($sql_query);
        $stmt->execute(array(':productName'=> $productName,':latA'=> $latA,':lonA'=> $lonA,':maxDistance'=> $maxDistance));
        $stores  = $stmt->fetchAll(PDO::FETCH_OBJ);
        $dbCon = null;
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
    return $stores;
}