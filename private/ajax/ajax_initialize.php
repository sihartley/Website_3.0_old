<?php
/* Define Directory Paths */
define('ROOT', str_replace('\\', '/', dirname($_SERVER['DOCUMENT_ROOT']))); //C:/xampp/htdocs/Website_3.0
define('PRIV_PATH', str_replace('\\', '/', dirname($_SERVER['DOCUMENT_ROOT']) . '/private')); //C:/xampp/htdocs/Website_3.0/private
define('PUB_PATH', str_replace('\\', '/', dirname($_SERVER['DOCUMENT_ROOT']) . '/public')); //C:/xampp/htdocs/Website_3.0/public

/* Host IP Addresses*/
include PRIV_PATH.'/connections/host_ips.php';

/* Functions for Ajax */
require_once PRIV_PATH . '/functions/ajax_functions.php';

/* Server Detection, Database Prefix, HTML Minification, Right Click Protection, Live Reload, Server ID Dot, Database Credentials*/
[$hostingServer, $dbPrefix] = ajax_host_ident($_SERVER['SERVER_ADDR']);
