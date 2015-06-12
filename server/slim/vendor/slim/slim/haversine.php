<?php
class Haversine {
    private $latA;
    private $lonA;
    private $latB;
    private $lonB;
    
    public function __construct($latA, $lonA, $latB, $lonB) {
        $this->latA = deg2rad($latA);
        $this->lonA = deg2rad($lonA);
        $this->latB = deg2rad($latB);
        $this->lonB = deg2rad($lonB);
    }
    public function getDistance() {
        $radiusOfEarth = 6371000;// Earth's radius in meters.
        $diffLatitude = $this->latB - $this->latA;
        $diffLongitude = $this->lonB - $this->lonA;
        $a = sin($diffLatitude / 2) * sin($diffLatitude / 2) +
           cos($this->latA) * cos($this->latB) *
           sin($diffLongitude / 2) * sin($diffLongitude / 2);
        $c = 2 * asin(sqrt($a));
        $distance = $radiusOfEarth * $c;
        return $distance;
    }
}