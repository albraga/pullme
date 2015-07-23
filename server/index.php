<?php

require 'mysql.php';
require 'Slim/Slim.php';
\Slim\Slim::registerAutoloader();
include('store.php');

$app = new \Slim\Slim();
$app->get('/stores/:maxDistance/:productName/:lat/:lon',
          function($maxDistance, $productName, $lat, $lon) use($app) {

              $st1 = new Store(1, $lat, $lon + 0.002,'super box','b','c','d','images/cart1.png');
              $st2 = new Store(2, $lat + 0.003, $lon,'carrefour','f','g','h','images/cart2.png');
              $st3 = new Store(3, $lat, $lon + 0.004,'todo ida','j','k','l','images/cart3.png');
              $st4 = new Store(4, $lat, $lon + 0.005,'box 1','j','k','l','images/stall.png');
              $st5 = new Store(5, $lat, $lon + 0.00505,'box 2','j','k','l','images/stall2.png');
              $st6 = new Store(6, $lat, $lon + 0.00510,'box 3','j','k','l','images/stall3.png');
              $st7 = new Store(7, $lat - 0.00720, $lon - 0.00720,'terceirao','j','k','l','images/terceirao.jpg');

              $withinReach = array();

              $stores = array($st1, $st2, $st3, $st4, $st5, $st6, $st7);
              
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