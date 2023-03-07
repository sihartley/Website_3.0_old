<?php /* Core Function Used In EVERY Page */

/* Hosting Server Identification */
function host_ident($server): array
{
    global $godaddy_ip, $inmotion_ip;
    if ($server === $inmotion_ip) {
        $hostingServer = 'InMotion';
        $dbPrefix = 'n64e7f5_';
        $minifyHTML = ob_start("minifier" ) ;
        $rightClickProtect = '' /* ' oncontextmenu="return false;"'; */;
        $liveReload = '';
        $serverDot = 'darkred';
        define('DB_SERVER', 'localhost'); //GoDaddy & Local Hosted Databases
        define('DB_USER', 'n64e7f5_AccessAllDB'); //InMotion Hosted Databases
        define('DB_PASS', 'Auptxj27v$!#'); //InMotion Hosted Databases
//  echo "Hosted by InMotion Hosting ".$dbPrefix."  databases.php";
    } elseif ($server === $godaddy_ip) {
        $hostingServer = 'GoDaddy';
        $dbPrefix = '';
        $minifyHTML = ob_start("minifier" );
        $rightClickProtect = ' oncontextmenu="return false;"';
        $liveReload = '';
        $serverDot = 'green';
        define('DB_SERVER', 'localhost'); //GoDaddy & Local Hosted Databases
        define('DB_USER', 'AccessAllDB'); //GoDaddy & Local Hosted Databases
        define('DB_PASS', 'Paranoia13$'); //GoDaddy & Local Hosted Databases
//  echo "Hosted by GoDaddy Hosting".$dbPrefix."  databases.php";
    } else {
        $hostingServer = 'Local';
        $dbPrefix = '';
        $minifyHTML = '';
        $rightClickProtect = '';
        $liveReload = '<!-- LiveReload -->' . "\n" . '<script src="http://localhost:35729/livereload.js"></script>' . PHP_EOL;
        $serverDot = 'darkorange';
        define('DB_SERVER', 'localhost'); //GoDaddy & Local Hosted Databases
        define('DB_USER', 'AccessAllDB'); //GoDaddy & Local Hosted Databases
        define('DB_PASS', 'Paranoia13$'); //GoDaddy & Local Hosted Databases
//  echo "Local Xampp Server".$dbPrefix." databases.php";
    }

    return array($hostingServer, $dbPrefix, $minifyHTML, $rightClickProtect, $liveReload, $serverDot);
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

/* Automatic File Versioning */
function auto_version($file) {
    // if it is not a valid path (example: a CDN url)
    if (!str_starts_with($file, '/') || !file_exists($_SERVER['DOCUMENT_ROOT'] . $file)) {
        return $file;
    }

    // retrieving the file modification time
    // https://www.php.net/manual/en/function.filemtime.php
    $mtime = filemtime($_SERVER['DOCUMENT_ROOT'] . $file);

    return sprintf("%s?v=%d", $file, $mtime);
}

/* HTML Minification */
function minifier($code): array|string|null
{
    $search = array(

        // Remove whitespaces after tags
      '/>[^\S ]+/s',

        // Remove whitespaces before tags
      '/[^\S ]+</s',

        // Remove multiple whitespace sequences
      '/(\s)+/s',

        // Removes comments
      '/<!--(.|\s)*?-->/'
    );
    $replace = array('>', '<', '\\1');
    $code = preg_replace($search, $replace, $code);
    return $code;
}

/* Non-SVG Image Ratio */
function image_ratio($image): void
{
    [$width, $height, $type, $attr] = getimagesize(PUB_PATH . urldecode($image));
    $ratio = $height/$width;
    echo "1/{$ratio}";
}

/* SVG Image Ratio */
function svg_ratio($svgfile): void
{
    $file = simplexml_load_string(file_get_contents(PUB_PATH . $svgfile));
    [$x_start, $y_start, $x_end, $y_end] = explode(' ', $file['viewBox']);
    $ratio = $y_end / $x_end;
    echo "1/{$ratio}";
}

/* Color Lists (Menu, Footer) */
function vinyl_list($brand, $cast_wrap): void{
    global $vinyl_array;
    $series = implode('',array_keys($vinyl_array[strtolower($brand)][$cast_wrap]['series']));
    foreach ($vinyl_array[strtolower($brand)][$cast_wrap]['series'][$series]['type'] as $type) {
        if ($cast_wrap === 'wrap') {
            echo "<li><a href='" . $vinyl_array[strtolower($brand)]['page'] . "#$cast_wrap-$type'>$brand $series " . ucwords($type) . " Colors</a></li>";
        } else {
            echo "<li><a href='" . $vinyl_array[strtolower($brand)]['page'] . "#$series-$cast_wrap'>$brand $series Colors</a></li>";
        }
    }
}





