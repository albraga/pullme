<?php
require 'Slim/Slim.php';
\Slim\Slim::registerAutoloader();
include('store.php');

$app = new \Slim\Slim();
$app->get('/stores/:maxDistance/:productName/:lat/:lon',
          function($maxDistance, $productName, $lat, $lon) use($app) {

              $st1 = new Store(1, $lat, $lon + 0.002,'a','b','c','d');
              $st2 = new Store(2, $lat + 0.002, $lon,'e','f','g','h');
              $st3 = new Store(3, $lat, $lon + 0.003,'i','j','k','l');
              $st4 = new Store(4, $lat + 0.003, $lon,'m','n','o','p');

              $withinReach = array();

              $stores = array($st1, $st2, $st3, $st4);
              
               foreach($stores as $store) {
                  if ($store->getDistanceFromUser($lat, $lon) <= $maxDistance) {
                      $withinReach[] = $store->toArray();
                      }
                  }
            
              $response = $app->response();
              $response->header('Access-Control-Allow-Origin', '*');
              $response->write(json_encode($withinReach));
             
});

$app->run();