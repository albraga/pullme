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