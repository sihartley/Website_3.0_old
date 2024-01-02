<?php
echo $_SERVER['REQUEST_URI'] . '</br>';

if (str_contains($_SERVER['REQUEST_URI'], 'automotive')) {
    echo 'true';
}

function category_ident($cat, $string):void {
    if (str_contains($_SERVER['REQUEST_URI'], $cat)) {
        echo $string;
    }
}

category_ident('motorcycle', 'Function Working');


