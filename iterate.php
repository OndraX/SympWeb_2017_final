<?php




$raw = file_get_contents("js/json/harm.json");

$data = json_decode($raw, true);
var_dump()
array_walk_recursive(
    $data,
    function (&$value, $key) {
        if($key == 'program'){
            var_dump($value);
        }
        /*if($key == "jmeno"){
            $ref =  str_replace(
                ["'",".",",","-", "&nbsp;", " "],
                "",iconv("utf-8", "us-ascii//TRANSLIT", ucwords ( $value))) . "<br>";
        }*/
    }
);
