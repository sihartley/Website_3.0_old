<?php
session_start();

setcookie("LastVisitedSection", "Use", time() + 3600, "/", $_SERVER['HTTP_HOST']);

/* Define Directory Paths */
define('ROOT', str_replace('\\', '/', dirname($_SERVER['DOCUMENT_ROOT']))); //C:/xampp/htdocs/Website_3.0
define('PRIV_PATH', str_replace('\\', '/', dirname($_SERVER['DOCUMENT_ROOT']) . '/private')); //C:/xampp/htdocs/Website_3.0/private
define('PUB_PATH', str_replace('\\', '/', dirname($_SERVER['DOCUMENT_ROOT']) . '/public')); //C:/xampp/htdocs/Website_3.0/public

/* Arrays */
include PRIV_PATH.'/includes/arrays.php';

/* Host IPs */
include PRIV_PATH.'/connections/host_ips.php';

/* Business Info */
include PRIV_PATH.'/includes/business_info.php';

/* Core Functions (Functions for ALL Pages NO Exceptions) */
include PRIV_PATH.'/functions/core_functions.php';

/* Global Functions (Functions for ALL Pages) */
include PRIV_PATH.'/functions/global_functions.php';

/* Image Functions (Functions for Image Manipulation) */
include PRIV_PATH.'/functions/image_functions.php';

/* Server Detection, Database Prefix, HTML Minification, Right Click Protection, Live Reload, Server ID Dot, Database Credentials*/
[$hostingServer, $dbPrefix, $minifyHTML, $rightClickProtect, $liveReload, $serverDot] = host_ident($_SERVER['SERVER_ADDR']);

/* HTML Minification */
if (!empty($minifyHTML)) { $minifyHTML; /*core_functions - host_ident()*/ }

/* Color Chart Page Functions */
if (str_ends_with(pathinfo($_SERVER['REQUEST_URI'], PATHINFO_FILENAME), '-color-charts')) {
    /* Color Chart Queries Function */
    function db_color_query($brand, $series, $color_types = array(), $not_types = null, $not_likes = null, $likes = null): mysqli_result {
        global $dbPrefix;
        $brand = strtolower($brand);
        $color_types = implode("','", $color_types);
        $query = "(select series, color_name, color_code, hex, gradient, color_type from {$dbPrefix}Colors.$brand where series IN ('$series')
                  AND color_type IN ('$color_types') AND color_type NOT LIKE '$not_likes' AND available IS NOT NULL ORDER BY color_code ASC)";
        return db_query($query);
    }
}



