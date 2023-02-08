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
