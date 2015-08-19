<?php

require 'mysql.php';
require 'Slim/Slim.php';
\Slim\Slim::registerAutoloader();
include('store.php');

$app = new \Slim\Slim();
$app->get('/stores/:maxDistance/:productName/:lat/:lon',
          function($maxDistance, $productName, $lat, $lon) use($app) {
              $storesTemp = getStores($productName);
              $storess = array();

              foreach($storesTemp as $o) {
  $storess[] = new Store($o->store_name,$o->lat,$o->lon,$o->address,$o->phone,$o->image);
              }              

              $withinReach = array();
       
               foreach($storess as $store) {
                  if ($store->getDistanceFromUser($lat, $lon) <= $maxDistance) {
                      $withinReach[] = $store->toArray();
                      }
                  }
            
              $response = $app->response();
              $response->header('Access-Control-Allow-Origin', '*');
              $response->write(json_encode($withinReach));
             
});

$app->run();