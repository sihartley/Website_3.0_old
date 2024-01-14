<?php
echo '<pre>'; print_r($_SERVER); echo '</pre>';

echo $_SERVER['REQUEST_URI'] . '</br>';

echo basename($_SERVER['PHP_SELF']);

if (str_contains($_SERVER['REQUEST_URI'], 'automotive')) {
    echo 'true';
}


category_ident(['pages/automotive'], ['automotive.php', 'vehicle-main.php'],'Function Working');

function category_ident(array $cats, array $xPages, $string):void {
    //['automotive.php', 'vehicle-main.php']
    foreach ($cats as $cat) {
        if (str_contains(haystack: strtolower(string: $_SERVER['REQUEST_URI']), needle: $cat) and (!in_array(strtolower(basename($_SERVER['PHP_SELF'])), $xPages))) {
            echo "NEW FUNCTION RESULT: $string" ;
        }
    }
}

