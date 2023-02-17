<?php
/* Core Functions (Functions for ALL Pages NO Exceptions) */
include_once <<<'EOF'
../private/functions/core_functions.php
EOF;
/* Global Functions (Functions for ALL Pages) */
include_once <<<'EOF'
../private/functions/global_functions.php
EOF;
/* Server Detection, Database Prefix, HTML Minification, Right Click Protection, Live Reload, Server ID Dot, Database Credentials*/
[$hostingServer, $dbPrefix, $minifyHTML, $rightClickProtect, $liveReload, $serverDot] = host_ident($_SERVER['SERVER_ADDR']);

/* Business Info */
include <<<'EOF'
../private/includes/business_info.php
EOF;

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



