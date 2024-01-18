<?php

/* Hosting Server Identification for Ajax*/
function ajax_host_ident($server): array
{
    global $godaddy_ip, $inmotion_ip;
    if ($server === $inmotion_ip) {
        $hostingServer = 'InMotion';
        $dbPrefix = 'n64e7f5_';
        define('DB_SERVER', 'localhost'); //GoDaddy & Local Hosted Databases
        define('DB_USER', 'n64e7f5_AccessAllDB'); //InMotion Hosted Databases
        define('DB_PASS', 'Auptxj27v$!#'); //InMotion Hosted Databases
//  echo "Hosted by InMotion Hosting ".$dbPrefix."  databases.php";
    } elseif ($server === $godaddy_ip) {
        $hostingServer = 'GoDaddy';
        $dbPrefix = '';
        define('DB_SERVER', 'localhost'); //GoDaddy & Local Hosted Databases
        define('DB_USER', 'AccessAllDB'); //GoDaddy & Local Hosted Databases
        define('DB_PASS', 'Paranoia13$'); //GoDaddy & Local Hosted Databases
//  echo "Hosted by GoDaddy Hosting".$dbPrefix."  databases.php";
    } else {
        $hostingServer = 'Local';
        $dbPrefix = '';
        define('DB_SERVER', 'localhost'); //GoDaddy & Local Hosted Databases
        define('DB_USER', 'AccessAllDB'); //GoDaddy & Local Hosted Databases
        define('DB_PASS', 'Paranoia13$'); //GoDaddy & Local Hosted Databases
//  echo "Local Xampp Server".$dbPrefix." databases.php";
    }

    return array($hostingServer, $dbPrefix);
}

/* Database */
function db_connect(): bool|mysqli
{
    $connection = mysqli_connect(DB_SERVER, DB_USER, DB_PASS);
    confirm_db_connect();
    return $connection;
}

function confirm_db_connect(): void
{
    if(mysqli_connect_errno()) {
        $msg = 'Database connection failed: ';
        $msg .= mysqli_connect_error();
        $msg .= ' (' . mysqli_connect_errno() . ')';
        exit($msg);
    }
}

function confirm_result_set($result_set): void
{
    if (!$result_set) {
        die("Database query {$result_set} failed.");
    }
}

function db_query($query): mysqli_result
{
    $results = mysqli_query(db_connect(), $query);
    confirm_result_set($results);
    return $results;
}

function db_disconnect($connection): void
{
    if(isset($connection)) {
        mysqli_close($connection);
    }
}

/* Prevent SQL Injection */
function db_escape($string): string
{
    $connection = mysqli_connect(DB_SERVER, DB_USER, DB_PASS);
    return mysqli_real_escape_string($connection, $string);
}

/* Color List Building */
function color_graphic_query($id): array {
    global $dbPrefix;
    $graphicColumns = 'color2_perc_adjust, color3_perc_adjust, text_perc_adjust, text2_perc_adjust, text3_perc_adjust';
    $graphicQuery = "(SELECT {$graphicColumns} FROM {$dbPrefix}Automotive.graphics WHERE id = '{$id}' )";
    $graphic = mysqli_fetch_assoc(db_query($graphicQuery));
    db_disconnect(db_connect());
    return $graphic;
}

function mc_color_graphic_query($table, $id): array {
    global $dbPrefix;
    $graphicColumns = 'color2_perc_adjust, color3_perc_adjust, text_perc_adjust, text2_perc_adjust, text3_perc_adjust';
    $graphicQuery = "(SELECT {$graphicColumns} FROM {$dbPrefix}Motorcycle.graphics_{$table} WHERE id = '{$id}' )";
    $graphic = mysqli_fetch_assoc(db_query($graphicQuery));
    db_disconnect(db_connect());
    return $graphic;
}

function trailer_color_graphic_query($table, $id): array {
    global $dbPrefix;
    $graphicColumns = 'color2_perc_adjust, color3_perc_adjust, text_perc_adjust, text2_perc_adjust, text3_perc_adjust';
    $graphicQuery = "(SELECT {$graphicColumns} FROM {$dbPrefix}Trailer.{$table} WHERE id = '{$id}' )";
    $graphic = mysqli_fetch_assoc(db_query($graphicQuery));
    db_disconnect(db_connect());
    return $graphic;
}

function color_list_query($material, $brands): mysqli_result {
    global $dbPrefix;
    $colorColumns = 'id, hex, gradient, svg_gradient, brand, series, color_name, color_type, color_code, film_type, film_thickness, durability, price_load';
    $materials = json_decode( file_get_contents(PUB_PATH.'/data/material-data.json') , true);
    $colorQuery = null;
    //color query
    foreach ($brands as $key => $brand) {
        $keys = implode(array_keys($materials[$material]));
        $series = sprintf("'%s'", implode("', '", $materials[$material][$keys][$brand]) );
        $lcBrand =  strtolower($brand);
        if ($key === array_key_first($brands)) {
            $colorQuery = "(SELECT {$colorColumns} FROM {$dbPrefix}Colors.{$lcBrand} WHERE series IN ({$series}) AND available IS NOT NULL ";
        } else {
            $colorQuery .= " UNION SELECT {$colorColumns} FROM {$dbPrefix}Colors.{$lcBrand} WHERE series IN ({$series}) AND available IS NOT NULL ";
        }
        if ($key === array_key_last($brands)) {
            $colorQuery .= " ORDER BY brand, id ) ";
        }
    }
    return db_query($colorQuery);
}

function colorPriceLoad($price, $accentLoad, $colorLoad): string
{
    $colorPrice = $price * $accentLoad;
    $loadedPrice = $colorPrice + ($colorPrice * $colorLoad);
//    return ceil(sprintf('%0.2f',$loadedPrice));
    return ceil($loadedPrice);
}

/* Autocomplete Query */
function autocomplete_query($vColumns, $vehicleId): array {
    global $dbPrefix;
    $autocompleteQuery = "(SELECT $vColumns FROM {$dbPrefix}Automotive.vehicles WHERE id = '$vehicleId' )";
    $autocomplete = mysqli_fetch_assoc(db_query($autocompleteQuery));
    db_disconnect(db_connect());
    return $autocomplete;
}

/* Graphic Details Query */
function graphic_query($id): array {
    global $dbPrefix;
    $graphicColumns = 'make, model, product_name';
    $graphicQuery = "(SELECT {$graphicColumns} FROM {$dbPrefix}Automotive.graphics WHERE id = '{$id}' )";
    $graphic = mysqli_fetch_assoc(db_query($graphicQuery));
    db_disconnect(db_connect());
    return $graphic;
}