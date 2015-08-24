<?php

require 'mysql.php';
require 'Slim/Slim.php';
\Slim\Slim::registerAutoloader();
include('store.php');

$app = new \Slim\Slim();
$app->get('/stores/:maxDistance/:productName/:lat/:lon',
          function($maxDistance, $productName, $lat, $lon) use($app) {
              $storesTemp = getStores($productName, $lat, $lon, $maxDistance);
              $stores = array();

              foreach($storesTemp as $o) {
  $stores[] = new Store($o->store_name,$o->lat,$o->lon,$o->address,$o->phone,$o->image);
              }              

              $response = $app->response();
              $response->header('Access-Control-Allow-Origin', '*');
              $response->write(json_encode($stores));
             
});

$app->run();