<?php
require 'Slim/Slim.php';
\Slim\Slim::registerAutoloader();
include('store.php');

$app = new \Slim\Slim();
$app->get('/stores/:maxDistance/:productName/:lat/:lon',
          function($maxDistance, $productName, $lat, $lon) use($app) {

              $st1 = new Store(1, $lat, $lon + 0.002,'super box','b','c','d','../images/cart1.png');
              $st2 = new Store(2, $lat + 0.003, $lon,'carrefour','f','g','h','../images/cart2.png');
              $st3 = new Store(3, $lat, $lon + 0.004,'todo ida','j','k','l','../images/cart3.png');

              $withinReach = array();

              $stores = array($st1, $st2, $st3);
              
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