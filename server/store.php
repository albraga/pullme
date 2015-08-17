<?php
include('haversine.php');

class Store {

    public $id;
    public $lat;
    public $lon;
    public $name;
    public $address;
    public $phone;
    public $image;

    public function __construct($id, $lat, $lon, $name, $address, $phone, $image) {
        $this->id = $id;
        $this->lat = $lat;
        $this->lon = $lon;
        $this->name = $name;
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
        return array('id' => $this->id, 'lat' => $this->lat, 'lon' => $this->lon, 'name' => $this->name, 'address' => $this->address, 'phone' => $this->phone, 'image' => $this->image);
    }
}