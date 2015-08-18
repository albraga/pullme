<?php
include('haversine.php');

class Store {

    public $store_name;
    public $lat;
    public $lon;
    public $address;
    public $phone;
    public $image;

    public function __construct($store_name, $lat, $lon, $address, $phone, $image) {
        $this->store_name = $store_name;
        $this->lat = $lat;
        $this->lon = $lon;
        $this->address = $address;
        $this->phone = $phone;
        $this->image = $image;
    }

    public function getDistanceFromUser($userLat, $userLon) {
        $h = new Haversine($this->lat, $this->lon, $userLat, $userLon);
        return $h->getDistance();
    }

    public function getJsonData(){
        $var = get_object_vars($this);
        foreach($var as &$value){
            if(is_object($value) && method_exists($value,'getJsonData')){
                $value = $value->getJsonData();
            }
        }
        return $var;
    }

    public function toArray() {
        return array('store_name' => $this->store_name, 'lat' => $this->lat, 'lon' => $this->lon, 'address' => $this->address, 'phone' => $this->phone, 'image' => $this->image);
    }
}