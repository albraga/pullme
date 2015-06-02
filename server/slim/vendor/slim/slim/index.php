<?php
require 'Slim/Slim.php';
\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();
$app->get('/widgets/', function() use($app) {
    $data = array("Volvo", "BMW", "Toyota");
    $response = $app->response();
    $response->header('Access-Control-Allow-Origin', '*');
    $response->write(json_encode($data));
});

$app->run();